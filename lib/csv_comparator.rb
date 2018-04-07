# frozen_string_literal: true

require 'csv'

class CsvComparator
  SEED_DIRECTORY = Rails.env.test? ? 'spec/fixtures' : 'db/seeds'

  def initialize(klass:, target_columns:)
    @klass = klass
    @target_columns = target_columns
    csv_filename = "#{SEED_DIRECTORY}/#{@klass.name.underscore.pluralize}.csv"
    @csv_attrs = CSV.read(csv_filename)
    @conditions_str = ''
  end

  def destroy_unused_records
    return if diff.blank?
    unused_records =
      if @klass.superclass.name == 'AttachedAbility'
        unused_attached_records
      else
        unused_master_records
      end
    unused_records.destroy_all
    puts "=== Deleted #{@klass.name} === #{@conditions_str}"
  end

  private

  def unused_attached_records
    conditions_ary = diff.map do |d|
      ary = [@target_columns.keys, d].transpose
      Hash[*ary.flatten]
    end
    unused_records = @klass.where(id: nil)
    conditions_ary.each do |condition|
      unused_records = unused_records.or(@klass.where(condition))
    end
    @conditions_str = conditions_ary
    unused_records
  end

  def unused_master_records
    target_keys = @target_columns.keys.map
    conditions = target_keys.with_index { |key, i| [key => [diff][i]] }.flatten
    @conditions_str = conditions
    @klass.where(*conditions)
  end

  def diff
    case @klass.name
    when 'AttachedHeroAbility'
      @klass.pluck(*@target_columns.keys) - generated_hero_ability_attrs
    when 'AttachedVipAbility'
      @klass.pluck(*@target_columns.keys) - generated_vip_ability_attrs
    else
      @klass.pluck(*@target_columns.keys).map(&:to_s) \
        - @csv_attrs.map { |attr| attr[*@target_columns.values] }
    end
  end

  def generated_hero_ability_attrs
    @target_columns.delete(:hero_id)
    @csv_attrs.map do |attr|
      hero = Hero.find_by(name: attr[0])
      hero_ability = HeroAbility.find_by(hero: hero, stage: attr[1])
      ability = Ability.find_by(name: attr[2])
      [hero_ability.try(:id), ability.try(:id)].compact
    end
  end

  def generated_vip_ability_attrs
    @csv_attrs.map do |attr|
      vip_ability = VipAbility.find_by(vip_level: attr[0])
      ability = Ability.find_by(name: attr[1])
      [vip_ability.try(:id), ability.try(:id)].compact
    end
  end
end

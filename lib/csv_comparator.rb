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
    if @klass.superclass.name == 'AttachedAbility'
      @klass.pluck(*@target_columns.keys) - generated_attached_ability_attrs
    else
      @klass.pluck(*@target_columns.keys).map(&:to_s) \
        - @csv_attrs.map { |attr| attr[*@target_columns.values] }
    end
  end

  def generated_attached_ability_attrs
    case @klass.name
    when 'AttachedHeroAbility' then generated_hero_ability_attrs
    when 'AttachedVipAbility' then generated_vip_ability_attrs
    when 'AttachedCoreAbility' then generated_core_ability_attrs
    when 'AttachedEquipageAbility' then generated_equipage_ability_attrs
    when 'AttachedCardAbility' then generated_card_ability_attrs
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

  def generated_core_ability_attrs
    @csv_attrs.map do |attr|
      hero = Hero.find_by(name: attr[0])
      ability = Ability.find_by(name: attr[1])
      [hero.try(:id), ability.try(:id)].compact
    end
  end

  def generated_equipage_ability_attrs
    @csv_attrs.map do |attr|
      equipage = Equipage.find_by(name: attr[0])
      grade = Grade.find_by(level: attr[1])
      ability = Ability.find_by(name: attr[2])
      [equipage.try(:id), grade.try(:id), ability.try(:id)].compact
    end
  end

  def generated_card_ability_attrs
    @csv_attrs.map do |attr|
      card = Card.find_by(name: attr[0])
      grade = Grade.find_by(level: attr[1])
      ability = Ability.find_by(name: attr[2])
      [card.try(:id), grade.try(:id), ability.try(:id)].compact
    end
  end
end

# frozen_string_literal: true

require 'csv'

class CsvComparator
  SEED_DIRECTORY = Rails.env.test? ? 'spec/fixtures' : 'db/seeds'

  def initialize(klass:, target_columns:)
    @klass = klass
    @target_columns = target_columns
    csv_filename = "#{SEED_DIRECTORY}/#{@klass.name.underscore.pluralize}.csv"
    @csv_attrs = CSV.read(csv_filename)
  end

  def destroy_unused_records
    return if diff.blank?
    unused_records = @klass.where(*conditions)
    unused_records.destroy_all
    puts "=== Deleted #{@klass.name} === #{conditions}"
  end

  private

  def diff
    if @klass.superclass.name == 'AttachedAbility'
      attached_abilities_diff
    else
      @klass.pluck(*@target_columns.keys).map(&:to_s) \
        - @csv_attrs.map { |attr| attr[*@target_columns.values] }
    end
  end

  def conditions
    if @klass.superclass.name == 'AttachedAbility'
      conditions_ary = @target_columns.keys.map.with_index { |key, i| [key, diff.transpose[i]] }.flatten(1)
      [Hash[*conditions_ary]]
    else
      @target_columns.keys.map.with_index { |key, i| [key => [diff][i]] }.flatten
    end
  end

  def attached_abilities_diff
    generated_attrs =
      case @klass.name
      when 'AttachedHeroAbility'
        generated_hero_ability_attrs
      end
    @klass.pluck(*@target_columns.keys) - generated_attrs
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
end

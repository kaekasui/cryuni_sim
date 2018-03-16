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
    conditions =
      @target_columns.keys.map.with_index { |key, i| [key => [diff][i]] }
    unused_records = @klass.where(*conditions.flatten)
    unused_records.destroy_all
    puts "=== Deleted #{@klass.name} === #{conditions}"
  end

  private

  def diff
    @klass.pluck(*@target_columns.keys).map(&:to_s) \
      - @csv_attrs.map { |attr| attr[*@target_columns.values] }
  end
end

# frozen_string_literal: true

require 'csv'

class UnusedRecordsManager
  SEED_DIRECTORY = Rails.env.test? ? 'spec/fixtures' : 'db/seeds'

  def initialize(klass:, column_name:, csv_index:)
    @klass = klass
    @column_name = column_name
    @csv_index = csv_index
    @unused_records = load_unused_records
  end

  def destroy_all_and_print
    return if @unused_records.blank?
    ActiveRecord::Base.transaction do
      column_names = @unused_records.pluck(@column_name)
      @unused_records.destroy_all
      puts "== Deleted #{@klass.name}: #{column_names}"
    end
  rescue
    puts "== #{@klass.name}の不要なデータ削除時にエラーが発生しました"
  end

  private

  def load_unused_records
    attrs = CSV.read("#{SEED_DIRECTORY}/#{@klass.name.underscore.pluralize}.csv")
    diff = @klass.pluck(@column_name) - attrs.map { |attr| attr[@csv_index] }
    @klass.where(@column_name => diff)
  end
end

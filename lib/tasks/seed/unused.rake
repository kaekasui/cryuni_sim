# frozen_string_literal: true

require 'csv_comparator'

namespace :db do
  namespace :seed do
    desc 'Remove unused records'
    task unused: :environment do
      target_keys = %i[klass target_columns]
      csv_data = CSV.read('lib/csv_comparator_targets.csv')
      targets = csv_data.map do |line_ary|
        columns = Hash[*line_ary[1..-1].flatten].symbolize_keys
        [line_ary[0].constantize, columns.each { |k, v| columns[k] = v.to_i }]
      end
      targets.each do |target|
        ary = [target_keys, target].transpose
        comparator = CsvComparator.new(Hash[*ary.flatten])
        # NOTE: データにはあるのにCSVファイルにないデータを削除します
        comparator.destroy_unused_records
      end
    end
  end
end

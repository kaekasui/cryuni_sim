# frozen_string_literal: true

require 'unused_records_manager'

namespace :db do
  namespace :seed do
    desc 'Remove unused records'
    task unused: :environment do
      target_keys = %i[klass column_name csv_index]
      targets = [
        [Hero, :name, 1],
        [Ability, :name, 0],
        [Grade, :name, 0],
        [VipAbility, :vip_level, 0],
        [HeroAbility, :stage, 3],
        [Equipage, :name, 0],
        [Card, :name, 0]
      ]
      targets.each do |target|
        ary = [target_keys, target].transpose
        manager = UnusedRecordsManager.new(Hash[*ary.flatten])
        manager.destroy_all_and_print
      end
    end
  end
end

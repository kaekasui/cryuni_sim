# frozen_string_literal: true

require 'csv_comparator'

namespace :db do
  namespace :seed do
    desc 'Remove unused records'
    task unused: :environment do
      target_keys = %i[klass target_columns]
      targets = [
        [Hero, { name: 1 }],
        [Ability, { name: 0 }],
        [Grade, { name: 0 }],
        [VipAbility, { vip_level: 0 }],
        [HeroAbility, { stage: 3 }],
        [Equipage, { name: 0 }],
        [Card, { name: 0 }],
        [AttachedHeroAbility, { hero_id: 0, hero_ability_id: 1, ability_id: 2 }]
      ]
      targets.each do |target|
        ary = [target_keys, target].transpose
        comparator = CsvComparator.new(Hash[*ary.flatten])
        # NOTE: データにはあるのにCSVファイルにないデータを削除します
        comparator.destroy_unused_records
      end
    end
  end
end

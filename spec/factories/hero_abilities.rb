FactoryBot.define do
  factory :hero_ability do
    hero
    intimacy_level_from { 1 }
    intimacy_level_to { [5, 10, 15].sample }
    stage { [*1..4].sample }
  end
end

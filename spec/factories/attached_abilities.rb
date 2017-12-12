# frozen_string_literal: true

FactoryBot.define do
  factory :attached_ability do
    ability
    score { [*10..30].sample }
    unit { '%' }
    type 'HeroAbility'

    factory :attached_hero_ability, class: AttachedHeroAbility do
      type 'AttachedHeroAbility'
      hero_ability
    end
  end
end

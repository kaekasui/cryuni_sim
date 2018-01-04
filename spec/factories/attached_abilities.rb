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

    factory :attached_vip_ability, class: AttachedVipAbility do
      type 'AttachedVipAbility'
      vip_ability
    end

    factory :attached_core_ability, class: AttachedCoreAbility do
      type 'AttachedCoreAbility'
      hero
    end

    factory :attached_equipage_ability, class: AttachedEquipageAbility do
      type 'AttachedEquipageAbility'
      equipage
      grade
    end
  end
end

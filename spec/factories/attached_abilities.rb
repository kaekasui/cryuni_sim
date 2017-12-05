# frozen_string_literal: true

FactoryBot.define do
  factory :attached_ability do
    hero_ability
    ability
    score { [*10..30].sample }
    unit { '%' }
  end
end

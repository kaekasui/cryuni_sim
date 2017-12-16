# frozen_string_literal: true

FactoryBot.define do
  factory :vip_ability do
    vip_level { [*1..13].sample }
    image_name { "#{[*1..13].sample}.gif" }
  end
end

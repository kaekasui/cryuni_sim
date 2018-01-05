# frozen_string_literal: true

FactoryBot.define do
  factory :grade do
    name { "高級#{level}" }
    level { [*1..5].sample }
    image_name { "#{level}.png" }
  end
end

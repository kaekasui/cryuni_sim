# frozen_string_literal: true

FactoryBot.define do
  factory :grade do
    level { [*1..5].sample }
    image_name { '1.png' }
  end
end

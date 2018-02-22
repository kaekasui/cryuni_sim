# frozen_string_literal: true

FactoryBot.define do
  factory :card do
    sequence(:name) { |n| "魔獣#{n}" }
    min_grade 1
    max_grade 5
  end
end

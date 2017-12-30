# frozen_string_literal: true

FactoryBot.define do
  factory :equipage do
    sequence(:name) { |n| "装備#{n}" }
    part { %w[hand head body foot accessory].sample }
    level { [*1..44].sample }
    min_grade 1
    max_grade 5
    card_slot { %w[1 2].sample }

    trait(:hand) do
      part :hand
    end

    trait(:head) do
      part :head
    end

    trait(:body) do
      part :body
    end

    trait(:foot) do
      part :foot
    end

    trait(:accessory) do
      part :accessory
    end
  end
end

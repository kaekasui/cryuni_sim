# frozen_string_literal: true

FactoryBot.define do
  factory :ability do
    name { "#{%w[対魔獣 対亜人 対無機物 対幻獣 対悪魔].sample}攻撃力" }
  end
end

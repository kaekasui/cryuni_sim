# frozen_string_literal: true

require 'rails_helper'

describe 'GET /api/cards/:id/card_abilities/:grade', autodoc: true do
  let!(:card) { create(:card, name: 'ゴブリンカード') }
  let!(:ability1) { create(:ability, name: '英雄移動速度') }
  let!(:ability2) { create(:ability, name: '対亜人攻撃力') }

  let(:grade2) { create(:grade, level: 2) }
  let(:grade3) { create(:grade, level: 3) }
  let!(:card_ability1) do
    create(:attached_card_ability,
           card: card, ability: ability1, grade: grade2, score: '10.0')
  end
  let!(:card_ability2) do
    create(:attached_card_ability,
           card: card, ability: ability2, grade: grade2, score: '20.0')
  end
  let!(:card_ability3) do
    create(:attached_card_ability,
           card: card, ability: ability1, grade: grade3, score: '20.0')
  end
  let!(:card_ability4) do
    create(:attached_card_ability,
           card: card, ability: ability2, grade: grade3, score: '30.0')
  end

  context 'グレードが2の場合' do
    it '200とデータが返ってくること' do
      get "/api/cards/#{card.id}/card_abilities/#{grade2.level}"
      expect(response.status).to eq 200

      json = [
        {
          id: card_ability1.id,
          ability_name: '英雄移動速度',
          score: '10.0',
          unit: '%',
          grade_level: 2
        },
        {
          id: card_ability2.id,
          ability_name: '対亜人攻撃力',
          score: '20.0',
          unit: '%',
          grade_level: 2
        }
      ]
      expect(response.body).to be_json_as(json)
    end
  end

  context 'グレードが3の場合' do
    it '200とデータが返ってくること' do
      get "/api/cards/#{card.id}/card_abilities/#{grade3.level}"
      expect(response.status).to eq 200

      json = [
        {
          id: card_ability3.id,
          ability_name: '英雄移動速度',
          score: '20.0',
          unit: '%',
          grade_level: 3
        },
        {
          id: card_ability4.id,
          ability_name: '対亜人攻撃力',
          score: '30.0',
          unit: '%',
          grade_level: 3
        }
      ]
      expect(response.body).to be_json_as(json)
    end
  end
end

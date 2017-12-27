# frozen_string_literal: true

require 'rails_helper'

describe 'GET /api/heros/:hero_id/core_abilities', autodoc: true do
  let!(:hero1) { create(:hero, name: '英雄1', locked: true) }
  let!(:hero2) { create(:hero, name: '英雄2', locked: false) }
  let!(:hero3) { create(:hero, name: '英雄3', locked: false) }
  let!(:ability1) { create(:ability, name: '英雄移動速度') }
  let!(:ability2) { create(:ability, name: '対魔獣攻撃力') }

  let!(:attached_ability1) do
    create(:attached_core_ability,
           ability: ability1, hero: hero1, score: 10.0)
  end
  let!(:attached_ability2) do
    create(:attached_core_ability,
           ability: ability2, hero: hero1, score: 20.0)
  end
  let!(:attached_ability3) do
    create(:attached_core_ability,
           ability: ability2, hero: hero2, score: 30.0)
  end

  context 'コアアビリティがある英雄' do
    it '200とデータが返ってくること' do
      get "/api/heros/#{hero1.id}/core_abilities"
      expect(response.status).to eq 200

      json = [
        {
          id: attached_ability1.id,
          ability_name: '英雄移動速度',
          score: '10.0',
          unit: '%'
        },
        {
          id: attached_ability2.id,
          ability_name: '対魔獣攻撃力',
          score: '20.0',
          unit: '%'
        }
      ]
      expect(response.body).to be_json_as(json)
    end
  end

  context 'コアアビリティがない英雄' do
    it '200と空のデータが返ってくること' do
      get "/api/heros/#{hero3.id}/core_abilities"
      expect(response.status).to eq 200

      json = []
      expect(response.body).to be_json_as(json)
    end
  end
end

# frozen_string_literal: true

require 'rails_helper'

describe 'GET /api/heros/:id/hero_abilities', autodoc: true do
  let!(:hero) { create(:hero, name: '英雄1') }
  let!(:ability1) { create(:ability, name: '英雄移動速度') }
  let!(:ability2) { create(:ability, name: '対亜人攻撃力') }

  let!(:hero_ability1) do
    create(:hero_ability,
           hero: hero, intimacy_level_from: 1, intimacy_level_to: 5, stage: 0)
  end
  let!(:attached_ability1) do
    create(:attached_ability,
           ability: ability1, hero_ability: hero_ability1, score: 10)
  end
  let!(:attached_ability2) do
    create(:attached_ability,
           ability: ability2, hero_ability: hero_ability1, score: 20)
  end
  let!(:hero_ability2) do
    create(:hero_ability,
           hero: hero, intimacy_level_from: 6, intimacy_level_to: 10, stage: 1)
  end
  let!(:attached_ability3) do
    create(:attached_ability,
           ability: ability1, hero_ability: hero_ability2, score: 20)
  end
  let!(:attached_ability4) do
    create(:attached_ability,
           ability: ability2, hero_ability: hero_ability2, score: 30)
  end
  let!(:hero_ability3) do
    create(:hero_ability,
           hero: hero, intimacy_level_from: 11, intimacy_level_to: 11, stage: 2)
  end

  it '200とデータが返ってくること' do
    get "/api/heros/#{hero.id}/hero_abilities"
    expect(response.status).to eq 200

    json = [
      {
        id: hero_ability1.id,
        stage: 0,
        intimacy_level: 'レベル1〜5',
        hero: {
          id: hero.id,
          name: '英雄1',
          image_name: 'claudia.jpg'
        },
        attached_abilities: [
          {
            ability_name: '英雄移動速度',
            score: '10.0',
            unit: '%'
          },
          {
            ability_name: '対亜人攻撃力',
            score: '20.0',
            unit: '%'
          }
        ]
      },
      {
        id: hero_ability2.id,
        stage: 1,
        intimacy_level: 'レベル6〜10',
        hero: {
          id: hero.id,
          name: '英雄1',
          image_name: 'claudia.jpg'
        },
        attached_abilities: [
          {
            ability_name: '英雄移動速度',
            score: '20.0',
            unit: '%',
          },
          {
            ability_name: '対亜人攻撃力',
            score: '30.0',
            unit: '%'
          }
        ]
      },
      {
        id: hero_ability3.id,
        stage: 2,
        intimacy_level: 'レベル11',
        hero: {
          id: hero.id,
          name: '英雄1',
          image_name: 'claudia.jpg'
        },
        attached_abilities: []
      }
    ]
    expect(response.body).to be_json_as(json)
  end
end

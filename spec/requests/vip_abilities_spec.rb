# frozen_string_literal: true

require 'rails_helper'

describe 'GET /api/vip_abilities', autodoc: true do
  let!(:ability1) { create(:ability, name: '英雄移動速度') }
  let!(:ability2) { create(:ability, name: '対魔獣攻撃力') }
  let!(:vip_ability1) { create(:vip_ability, vip_rank: 1) }
  let!(:vip_ability2) { create(:vip_ability, vip_rank: 2) }

  let!(:attached_ability1) do
    create(:attached_vip_ability,
           ability: ability1, vip_ability: vip_ability1, score: 10.0)
  end
  let!(:attached_ability2) do
    create(:attached_vip_ability,
           ability: ability2, vip_ability: vip_ability1, score: 20.0)
  end
  let!(:attached_ability3) do
    create(:attached_vip_ability,
           ability: ability1, vip_ability: vip_ability2, score: 20.0)
  end
  let!(:attached_ability4) do
    create(:attached_vip_ability,
           ability: ability2, vip_ability: vip_ability2, score: 30.0)
  end

  it '200とデータが返ってくること' do
    get '/api/vip_abilities'
    expect(response.status).to eq 200

    json = [
      {
        id: vip_ability1.id,
        vip_rank: 1,
        image_name: vip_ability1.image_name,
        attached_vip_abilities: [
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
      },
      {
        id: vip_ability2.id,
        vip_rank: 2,
        image_name: vip_ability2.image_name,
        attached_vip_abilities: [
          {
            id: attached_ability3.id,
            ability_name: '英雄移動速度',
            score: '20.0',
            unit: '%'
          },
          {
            id: attached_ability4.id,
            ability_name: '対魔獣攻撃力',
            score: '30.0',
            unit: '%'
          }
        ]
      }
    ]
    expect(response.body).to be_json_as(json)
  end
end

# frozen_string_literal: true

require 'rails_helper'

describe 'GET /api/heros/:id/hero_abilities', autodoc: true do
  let!(:hero) { create(:hero, name: '英雄1') }
  let!(:hero_ability1) do
    create(:hero_ability,
           hero: hero, intimacy_level_from: 1, intimacy_level_to: 5, stage: 0)
  end
  let!(:hero_ability2) do
    create(:hero_ability,
           hero: hero, intimacy_level_from: 6, intimacy_level_to: 10, stage: 1)
  end
  let!(:hero_ability3) do
    create(:hero_ability,
           hero: hero, intimacy_level_from: 11, intimacy_level_to: 15, stage: 2)
  end

  it '200とデータが返ってくること' do
    get "/api/heros/#{hero.id}/hero_abilities"
    expect(response.status).to eq 200

    json = [
      {
        id: hero_ability1.id,
        stage: 0,
        intimacy_level_from: 1,
        intimacy_level_to: 5
      },
      {
        id: hero_ability2.id,
        stage: 1,
        intimacy_level_from: 6,
        intimacy_level_to: 10
      },
      {
        id: hero_ability3.id,
        stage: 2,
        intimacy_level_from: 11,
        intimacy_level_to: 15
      }
    ]
    expect(response.body).to be_json_as(json)
  end
end

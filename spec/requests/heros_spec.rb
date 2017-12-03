# frozen_string_literal: true

require 'rails_helper'

describe 'GET /api/heros', autodoc: true do
  let!(:hero1) { create(:hero, name: '英雄1') }
  let!(:hero2) { create(:hero, name: '英雄2') }

  it '200とデータが返ってくること' do
    get '/api/heros'
    expect(response.status).to eq 200

    json = [
      {
        id: hero1.id,
        name: '英雄1'
      },
      {
        id: hero2.id,
        name: '英雄2'
      }
    ]
    expect(response.body).to be_json_as(json)
  end
end

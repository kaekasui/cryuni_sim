# frozen_string_literal: true

require 'rails_helper'

describe 'GET /api/heros', autodoc: true do
  let!(:hero1) { create(:hero, name: '英雄1', locked: true) }
  let!(:hero2) { create(:hero, name: '英雄2', locked: false) }

  it '200とデータが返ってくること' do
    get '/api/heros'
    expect(response.status).to eq 200

    json = [
      {
        id: hero1.id,
        name: '英雄1',
        image_name: 'claudia.jpg',
        whole_image_name: 'sd_claudia.png',
        locked: true
      },
      {
        id: hero2.id,
        name: '英雄2',
        image_name: 'claudia.jpg',
        whole_image_name: 'sd_claudia.png',
        locked: false
      }
    ]
    expect(response.body).to be_json_as(json)
  end
end

# frozen_string_literal: true

require 'rails_helper'

describe 'GET /api/equipages/:part', autodoc: true do
  let!(:head_equipage1) { create(:equipage, :head) }
  let!(:head_equipage2) { create(:equipage, :head) }
  let!(:hand_equipage) { create(:equipage, :hand) }
  let!(:grade1) { create(:grade, level: 1) }
  let!(:grade2) { create(:grade, level: 2) }
  let!(:grade3) { create(:grade, level: 3) }
  let!(:attached_equipage_ability1) do
    create(:attached_equipage_ability, equipage: head_equipage1, grade: grade1)
  end
  let!(:attached_equipage_ability2) do
    create(:attached_equipage_ability, equipage: head_equipage1, grade: grade1)
  end

  context '頭装備の場合' do
    it '200とデータが返ってくること' do
      get '/api/equipages/head'
      expect(response.status).to eq 200

      json = [
        {
          id: head_equipage1.id,
          name: head_equipage1.name,
          part: head_equipage1.part,
          part_human_name: '頭',
          level: head_equipage1.level,
          min_grade: head_equipage1.min_grade,
          max_grade: head_equipage1.max_grade,
          card_slot: head_equipage1.card_slot,
          image_name: head_equipage1.image_name,
          grades_with_abilities: [
            {
              id: grade1.id,
              name: grade1.name,
              level: grade1.level,
              image_name: grade1.image_name,
              attached_equipage_abilities: [
                {
                  id: attached_equipage_ability1.id,
                  score: attached_equipage_ability1.score.to_s,
                  unit: attached_equipage_ability1.unit,
                  ability_name: attached_equipage_ability1.ability.name
                },
                {
                  id: attached_equipage_ability2.id,
                  score: attached_equipage_ability2.score.to_s,
                  unit: attached_equipage_ability2.unit,
                  ability_name: attached_equipage_ability2.ability.name
                }
              ]
            }
          ]
        },
        {
          id: head_equipage2.id,
          name: head_equipage2.name,
          part: head_equipage2.part,
          part_human_name: '頭',
          level: head_equipage2.level,
          min_grade: head_equipage2.min_grade,
          max_grade: head_equipage2.max_grade,
          card_slot: head_equipage2.card_slot,
          image_name: head_equipage2.image_name,
          grades_with_abilities: []
        }
      ]
      expect(response.body).to be_json_as(json)
    end
  end

  context '手装備の場合' do
    it '200とデータが返ってくること' do
      get '/api/equipages/hand'
      expect(response.status).to eq 200

      json = [
        {
          id: hand_equipage.id,
          name: hand_equipage.name,
          part: hand_equipage.part,
          part_human_name: '手',
          level: hand_equipage.level,
          min_grade: hand_equipage.min_grade,
          max_grade: hand_equipage.max_grade,
          card_slot: hand_equipage.card_slot,
          image_name: hand_equipage.image_name,
          grades_with_abilities: []
        }
      ]
      expect(response.body).to be_json_as(json)
    end
  end

  context '部位以外のURLの場合' do
    it '404が返ってくること' do
      get '/api/equipages/aaa'

      expect(response.status).to eq 404
    end
  end
end

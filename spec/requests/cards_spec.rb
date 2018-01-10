# frozen_string_literal: true

require 'rails_helper'

describe 'GET /api/cards', autodoc: true do
  let!(:card1) { create(:card) }
  let!(:card2) { create(:card) }
  let!(:grade1) { create(:grade, level: 1) }
  let!(:grade2) { create(:grade, level: 2) }
  let!(:grade3) { create(:grade, level: 3) }

  it '200とデータが返ってくること' do
    get '/api/cards'
    expect(response.status).to eq 200

    json = [
      {
        id: card1.id,
        name: card1.decorate.name,
        min_grade: card1.min_grade,
        max_grade: card1.max_grade,
        image_name: card1.image_name,
        range_grades: [
          {
            id: grade1.id,
            name: grade1.name,
            level: grade1.level,
            image_name: grade1.image_name
          },
          {
            id: grade2.id,
            name: grade2.name,
            level: grade2.level,
            image_name: grade2.image_name
          },
          {
            id: grade3.id,
            name: grade3.name,
            level: grade3.level,
            image_name: grade3.image_name
          }
        ]
      },
      {
        id: card2.id,
        name: card2.decorate.name,
        min_grade: card2.min_grade,
        max_grade: card2.max_grade,
        image_name: card2.image_name,
        range_grades: [
          {
            id: grade1.id,
            name: grade1.name,
            level: grade1.level,
            image_name: grade1.image_name
          },
          {
            id: grade2.id,
            name: grade2.name,
            level: grade2.level,
            image_name: grade2.image_name
          },
          {
            id: grade3.id,
            name: grade3.name,
            level: grade3.level,
            image_name: grade3.image_name
          }
        ]
      }
    ]
    expect(response.body).to be_json_as(json)
  end
end

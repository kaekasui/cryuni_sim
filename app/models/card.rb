# frozen_string_literal: true

class Card < ApplicationRecord
  has_many :attached_card_abilities

  def range_grades
    Grade.where(level: [min_grade..max_grade])
  end
end

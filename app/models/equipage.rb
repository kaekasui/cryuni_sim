# frozen_string_literal: true

class Equipage < ApplicationRecord
  has_many :attached_equipage_abilities

  enum part: { hand: 1, head: 2, body: 3, foot: 4,
               accessory1: 5, accessory2: 5 }

  def range_grades
    Grade.where(level: [min_grade..max_grade])
  end
end

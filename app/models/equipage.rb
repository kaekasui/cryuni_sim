# frozen_string_literal: true

class Equipage < ApplicationRecord
  has_many :attached_equipage_abilities

  enum part: { hand: 1, head: 2, body: 3, foot: 4,
               accessory1: 5, accessory2: 5 }

  def grades_with_abilities
    attached_ability_ids = attached_equipage_abilities.pluck(:id)
    Grade.includes(attached_equipage_abilities: :ability)
         .where(attached_abilities: { id: attached_ability_ids })
  end
end

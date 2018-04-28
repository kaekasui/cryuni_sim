# frozen_string_literal: true

class EquipageGradeSerializer < GradeSerializer
  has_many :attached_equipage_abilities
end

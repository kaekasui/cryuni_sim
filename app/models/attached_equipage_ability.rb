# frozen_string_literal: true

class AttachedEquipageAbility < AttachedAbility
  belongs_to :equipage
  belongs_to :grade
end

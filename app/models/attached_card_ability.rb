# frozen_string_literal: true

class AttachedCardAbility < AttachedAbility
  belongs_to :card
  belongs_to :grade
end

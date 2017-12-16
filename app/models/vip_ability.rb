# frozen_string_literal: true

class VipAbility < ApplicationRecord
  has_many :attached_vip_abilities, -> { order(:ability_id) }
end

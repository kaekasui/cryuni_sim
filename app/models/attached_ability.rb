# frozen_string_literal: true

class AttachedAbility < ApplicationRecord
  belongs_to :ability
  belongs_to :hero_ability
end

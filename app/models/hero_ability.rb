# frozen_string_literal: true

class HeroAbility < ApplicationRecord
  belongs_to :hero
  has_many :attached_abilities
end

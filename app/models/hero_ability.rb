# frozen_string_literal: true

class HeroAbility < ApplicationRecord
  belongs_to :hero
  has_many :attached_hero_abilities, -> { order(:ability_id) }
end

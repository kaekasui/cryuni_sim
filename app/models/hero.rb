# frozen_string_literal: true

class Hero < ApplicationRecord
  has_many :hero_abilities
  has_many :attached_core_abilities

  validates :name, presence: true
end

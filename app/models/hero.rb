# frozen_string_literal: true

class Hero < ApplicationRecord
  validates :name, presence: true

  has_many :hero_abilities
end

# frozen_string_literal: true

class Hero < ApplicationRecord
  has_many :hero_abilities

  validates :name, presence: true
end

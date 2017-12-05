# frozen_string_literal: true

class Ability < ApplicationRecord
  has_many :attached_abilities

  validates :name, presence: true
end

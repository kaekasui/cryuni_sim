# frozen_string_literal: true

class Ability < ApplicationRecord
  has_many :attached_abilities, -> { order(created_at: :desc) },
           dependent: :destroy

  validates :name, presence: true
end

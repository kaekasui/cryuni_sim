# frozen_string_literal: true

class Grade < ApplicationRecord
  has_many :attached_equipage_abilities
  has_many :attached_card_abilities
end

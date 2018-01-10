# frozen_string_literal: true

class Card < ApplicationRecord
  has_many :attached_card_abilities
end

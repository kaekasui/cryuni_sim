# frozen_string_literal: true

class Hero < ApplicationRecord
  validates :name, presence: true
end

# frozen_string_literal: true

class Equipage < ApplicationRecord
  enum part: { hand: 1, head: 2, body: 3, foot: 4, accessory: 5 }
end

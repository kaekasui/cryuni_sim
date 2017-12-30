# frozen_string_literal: true

class EquipageSerializer < ActiveModel::Serializer
  attributes :id, :name, :part, :level, :min_grade, :max_grade, :card_slot, :image_name
end

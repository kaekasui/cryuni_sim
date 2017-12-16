# frozen_string_literal: true

class HeroSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_name, :whole_image_name, :locked
end

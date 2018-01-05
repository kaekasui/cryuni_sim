# frozen_string_literal: true

class GradeSerializer < ActiveModel::Serializer
  attributes :id, :name, :level, :image_name
end

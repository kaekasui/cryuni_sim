# frozen_string_literal: true

class GradeSerializer < ActiveModel::Serializer
  attributes :id, :level, :image_name
end

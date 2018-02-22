# frozen_string_literal: true

class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :min_grade, :max_grade, :image_name, :range_grades

  def range_grades
    object.range_grades.map { |r| GradeSerializer.new(r) }
  end
end

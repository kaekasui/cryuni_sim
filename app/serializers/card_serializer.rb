# frozen_string_literal: true

class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :min_grade, :max_grade, :image_name, :range_grades

  def name
    object.decorate.name
  end

  def range_grades
    object.range_grades.map { |r| GradeSerializer.new(r) }
  end
end

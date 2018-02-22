# frozen_string_literal: true

class CardSerializer < ActiveModel::Serializer
  attributes :id, :card_name, :min_grade, :max_grade, :image_name, :range_grades

  def card_name
    object.decorate.card_name
  end

  def range_grades
    object.range_grades.map { |r| GradeSerializer.new(r) }
  end
end

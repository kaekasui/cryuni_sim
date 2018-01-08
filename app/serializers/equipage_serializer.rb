# frozen_string_literal: true

class EquipageSerializer < ActiveModel::Serializer
  attributes :id, :name, :part, :part_human_name, :level, :min_grade, :max_grade,
             :card_slot, :image_name, :range_grades

  def range_grades
    object.range_grades.map { |r| GradeSerializer.new(r) }
  end

  def part_human_name
    I18n.t("labels.part.#{object.part}")
  end
end

# frozen_string_literal: true

class EquipageSerializer < ActiveModel::Serializer
  attributes :id, :name, :part, :part_human_name, :level,
             :card_slot, :image_name, :grades_with_abilities

  def grades_with_abilities
    object.grades_with_abilities.map { |r| EquipageGradeSerializer.new(r) }
  end

  def part_human_name
    I18n.t("labels.part.#{object.part}")
  end
end

# frozen_string_literal: true

class AttachedCardAbilitySerializer < ActiveModel::Serializer
  attributes :id, :score, :unit, :ability_name, :grade_level

  def grade_level
    object.grade.level
  end

  def ability_name
    object.ability.name
  end
end

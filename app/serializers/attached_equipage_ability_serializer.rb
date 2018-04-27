# frozen_string_literal: true

class AttachedEquipageAbilitySerializer < ActiveModel::Serializer
  attributes :id, :score, :unit, :ability_name

  def ability_name
    object.ability.name
  end
end

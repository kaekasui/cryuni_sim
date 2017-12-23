# frozen_string_literal: true

class AttachedCoreAbilitySerializer < ActiveModel::Serializer
  attributes :id, :score, :unit, :ability_name

  def ability_name
    object.ability.name
  end
end

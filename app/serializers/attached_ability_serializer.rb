# frozen_string_literal: true

class AttachedAbilitySerializer < ActiveModel::Serializer
  attributes :id, :score, :unit, :ability_name

  belongs_to :hero_ability
  belongs_to :ability

  def ability_name
    object.ability.name
  end
end

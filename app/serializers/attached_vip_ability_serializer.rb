# frozen_string_literal: true

class AttachedVipAbilitySerializer < ActiveModel::Serializer
  attributes :id, :score, :unit, :ability_name

  belongs_to :vip_ability
  belongs_to :ability

  def ability_name
    object.ability.name
  end
end

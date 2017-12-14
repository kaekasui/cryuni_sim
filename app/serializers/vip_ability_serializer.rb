# frozen_string_literal: true

class VipAbilitySerializer < ActiveModel::Serializer
  attributes :id, :vip_level, :image_name

  has_many :attached_vip_abilities
end

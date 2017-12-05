# frozen_string_literal: true

class HeroAbilitySerializer < ActiveModel::Serializer
  attributes :id, :stage, :intimacy_level

  belongs_to :hero
  has_many :attached_abilities

  def intimacy_level
    object.decorate.intimacy_level
  end
end

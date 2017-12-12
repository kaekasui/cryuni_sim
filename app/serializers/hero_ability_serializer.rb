# frozen_string_literal: true

class HeroAbilitySerializer < ActiveModel::Serializer
  attributes :id, :stage,
             :intimacy_level, :intimacy_level_from, :intimacy_level_to

  belongs_to :hero
  has_many :attached_hero_abilities

  def intimacy_level
    object.decorate.intimacy_level
  end
end

# frozen_string_literal: true

class HeroAbilitySerializer < ActiveModel::Serializer
  attributes :id, :stage, :intimacy_level_from, :intimacy_level_to
end

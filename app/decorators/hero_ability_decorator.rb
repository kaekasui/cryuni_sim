# frozen_string_literal: true

class HeroAbilityDecorator < Draper::Decorator
  delegate_all

  def intimacy_level
    if intimacy_level_from == intimacy_level_to
      intimacy_level_from.to_s
    else
      "#{intimacy_level_from}〜#{intimacy_level_to}"
    end
  end
end

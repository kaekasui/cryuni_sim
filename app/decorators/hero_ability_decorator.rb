class HeroAbilityDecorator < Draper::Decorator
  delegate_all

  def intimacy_level
    level =
      if intimacy_level_from == intimacy_level_to
        "#{intimacy_level_from}"
      else
        "#{intimacy_level_from}〜#{intimacy_level_to}"
      end
    "#{I18n.t('labels.level')}#{level}"
  end
end

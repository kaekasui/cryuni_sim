# frozen_string_literal: true

class CardDecorator < Draper::Decorator
  delegate_all

  def name
    monster_name + I18n.t('labels.card')
  end
end

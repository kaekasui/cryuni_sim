# frozen_string_literal: true

class Api::CardAbilitiesController < ApplicationController
  before_action :set_card, :set_grade, :set_card_abilities, on: [:show]

  def show
    render json: @card_abilities.includes(:ability, :grade).order(:id)
  end

  private

  def set_card
    @card = Card.find(params[:card_id])
  end

  def set_grade
    @grade = Grade.find_by(level: params[:grade])
  end

  def set_card_abilities
    @card_abilities =
      @card.attached_card_abilities.where(grade: @grade)
  end
end

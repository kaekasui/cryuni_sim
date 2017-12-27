# frozen_string_literal: true

class Api::CoreAbilitiesController < ApplicationController
  before_action :set_hero

  def index
    render json: @hero.attached_core_abilities.includes(:ability)
  end

  private

  def set_hero
    @hero = Hero.find(params[:hero_id])
  end
end

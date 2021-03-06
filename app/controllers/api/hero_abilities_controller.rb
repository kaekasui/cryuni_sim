# frozen_string_literal: true

class Api::HeroAbilitiesController < ApplicationController
  before_action :set_hero

  def index
    render json: @hero.hero_abilities
      .includes(attached_hero_abilities: :ability).order(:stage)
  end

  private

  def set_hero
    @hero = Hero.find(params[:hero_id])
  end
end

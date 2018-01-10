# frozen_string_literal: true

class Api::HerosController < ApplicationController
  def index
    @heros = Hero.all.order(:position)
    render json: @heros
  end
end

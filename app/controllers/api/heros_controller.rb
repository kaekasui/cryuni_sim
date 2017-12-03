# frozen_string_literal: true

class Api::HerosController < ApplicationController
  def index
    @heros = Hero.all
    render json: @heros
  end
end

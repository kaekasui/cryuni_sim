# frozen_string_literal: true

class Api::CardsController < ApplicationController
  def index
    @cards = Card.all
    render json: @cards
  end
end

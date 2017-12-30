# frozen_string_literal: true

class Api::EquipagesController < ApplicationController
  before_action :set_equipages, on: [:show]
  def show
    render json: @equipages
  end

  private

  def set_equipages
    @equipages = Equipage.send(params[:part])
  end
end

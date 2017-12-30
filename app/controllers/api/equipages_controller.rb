# frozen_string_literal: true

class Api::EquipagesController < ApplicationController
  before_action :set_equipages, on: [:show]

  def show
    render json: @equipages
  rescue ActiveRecord::StatementInvalid
    render :error404, status: 404, formats: :json
  end

  private

  def set_equipages
    @equipages = Equipage.where(part: params[:part])
  end
end

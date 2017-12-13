# frozen_string_literal: true

class Api::VipAbilitiesController < ApplicationController
  before_action :set_vip_ability

  def show
    render json: @vip_ability
  end

  private

  def set_vip_ability
    @vip_ability = VipAbility.find_by(vip_level: params[:id])
  end
end

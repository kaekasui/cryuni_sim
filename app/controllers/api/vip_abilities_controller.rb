# frozen_string_literal: true

class Api::VipAbilitiesController < ApplicationController
  def index
    @vip_abilities = VipAbility.order(:vip_level)
    render json: @vip_abilities
  end
end

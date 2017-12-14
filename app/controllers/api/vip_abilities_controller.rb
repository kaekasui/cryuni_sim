# frozen_string_literal: true

class Api::VipAbilitiesController < ApplicationController
  def index
    @vip_abilities = VipAbility.all
    render json: @vip_abilities
  end
end

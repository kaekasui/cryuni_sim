# frozen_string_literal: true

class Api::VipAbilitiesController < ApplicationController
  def index
    @vip_abilities = VipAbility.includes(attached_vip_abilities: :ability).order(:vip_level)
    render json: @vip_abilities
  end
end

# frozen_string_literal: true

class Api::VipAbilitiesController < ApplicationController
  def index
    render json: VipAbility
      .includes(attached_vip_abilities: :ability).order(:vip_level)
  end
end

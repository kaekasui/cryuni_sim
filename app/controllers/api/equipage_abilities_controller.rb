# frozen_string_literal: true

class Api::EquipageAbilitiesController < ApplicationController
  before_action :set_equipage, :set_grade, :set_equipage_abilities, on: [:show]

  def show
    render json: @equipage_abilities.includes(:ability, :grade)
  end

  private

  def set_equipage
    @equipage = Equipage.find(params[:equipage_id])
  end

  def set_grade
    @grade = Grade.find_by(level: params[:grade])
  end

  def set_equipage_abilities
    @equipage_abilities = @equipage.attached_equipage_abilities.where(grade: @grade)
  end
end

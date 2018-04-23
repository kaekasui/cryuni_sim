# frozen_string_literal: true

class ApplicationController < ActionController::Base
  def error404
    render :error404, status: 404, formats: :json
  end
end

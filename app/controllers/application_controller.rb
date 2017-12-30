# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  class BadRequestError < StandardError; end

  rescue_from Exception, with: :error500 unless Rails.env.development?
  rescue_from ActiveRecord::RecordNotFound,
              ActionController::RoutingError,
              with: :error404
  rescue_from BadRequestError, with: :error400

  def error400(e)
    logger.warn [e, *e.backtrace].join("\n")
    @error = e
    exception_notifier(e) if Rails.env.production?
    render :error400, status: 400, formats: :json
  end

  def error404(_e = nil)
    render :error404, status: 404, formats: :json
  end

  def error500(e)
    exception_notifier(e) if Rails.env.production?
    logger.error e.inspect
    logger.error [e, *e.backtrace].join("\n")
    render :error500, status: 500, formats: :json
  end

  private

  def exception_notifier(e)
    text = <<~EOC
      ```
      url: #{request.url}
      error: #{e.inspect}
      #{[e, *e.backtrace].first(20).join("\n")}
      ```
    EOC
    Slack.chat_postMessage(
      text: text, username: 'Rails Error Notifier', channel: ENV['SLACK_CHANNEL']
    )
  end
end

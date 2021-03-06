# frozen_string_literal: true

ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../config/environment', __dir__)

require 'spec_helper'
require 'rspec/rails'
require 'shoulda-matchers'
require 'rspec/json_matcher'
# require 'capybara/poltergeist'
require 'capybara/rspec'
require 'capybara-screenshot/rspec'
require 'simplecov'
require 'selenium-webdriver'
# require 'paper_trail/frameworks/rspec'

Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end

Capybara.default_max_wait_time = 20

Capybara.javascript_driver = :selenium
Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(
    app,
    browser: :chrome,
    desired_capabilities: Selenium::WebDriver::Remote::Capabilities.chrome(
      chrome_options: {
        args: %w[headless disable-gpu window-size=1680,1050]
      }
    )
  )
end

ActiveRecord::Migration.maintain_test_schema!
SimpleCov.start do
  add_group 'Models', 'app/models'
  add_group 'Controllers', 'app/controllers'
  add_group 'Helpers', 'app/helpers'
  add_group 'Libraries', 'lib'
  add_group 'Decorators', 'app/decorators'
  add_group 'Uploaders', 'app/uploaders'
end

RSpec.configure do |config|
  include ActionDispatch::TestProcess

  # config.expect_with :rspec do |expectations|
  #  expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  # end
  # config.mock_with :rspec do |mocks|
  #  mocks.verify_partial_doubles = true
  # end
  config.include Capybara::DSL

  config.use_transactional_fixtures = false
  config.infer_spec_type_from_file_location!

  config.include FactoryBot::Syntax::Methods
  config.include RSpec::JsonMatcher
  # config.include ActiveJob::TestHelper
  # config.include RequestSpecHelper, type: :request
  # config.include FeatureSpecHelper, type: :feature
  # config.include ModelSpecHelper, type: :model

  config.before :suite do
    I18n.locale = :ja
    begin
      FactoryBot.lint
    ensure
      DatabaseRewinder.clean_all
    end
  end

  config.after :each do
    DatabaseRewinder.clean_all
  end

  # config.after :each, type: :feature do
  #  messages = page.driver.browser.manage.logs
  #                 .get(:browser).map(&:message).join("\n")
  #  puts messages if messages.present?
  # end

  # Autodoc.configuration.template =
  #  File.read(
  #    File.expand_path('../autodoc/templates/document.md.erb', __FILE__)
  #  )
  # Autodoc.configuration.suppressed_request_header =
  #  %w[Accept Content-Length Host]
  # Autodoc.configuration.suppressed_response_header =
  #  %w[
  #    Cache-Control Content-Length ETag
  #    X-Content-Type-Options X-Frame-Options X-Request-Id
  #    X-Runtime X-XSS-Protection
  #  ]
end

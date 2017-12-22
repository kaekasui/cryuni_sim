# frozen_string_literal: true

FactoryBot.define do
  factory :hero do
    name { 'クローディア' }
    image_name { 'claudia.jpg' }
    whole_image_name { 'sd_claudia.png' }
    locked { false }
  end
end

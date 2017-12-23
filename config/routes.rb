# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'welcome#show'

  namespace :api, format: :json do
    resources :heros, only: %i[index] do
      resources :hero_abilities, only: %i[index]
      resources :core_abilities, only: %i[index]
    end

    resources :vip_abilities, only: %i[index]
  end
end

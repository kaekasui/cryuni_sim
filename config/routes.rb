Rails.application.routes.draw do
  root to: 'welcome#show'

  namespace :api, format: :json do
    resources :heros, only: %i[index]
  end
end

Rails.application.routes.draw do
  get 'welcome/index'

  resources :articles do
    get 'dbindex', on: :collection
    resources :comments
  end

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  unless Rails.env.production?
    require 'sidekiq/web'
    mount Sidekiq::Web => '/sidekiq'
  end
end

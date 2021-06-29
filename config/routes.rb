Rails.application.routes.draw do
  root 'home#home'
  namespace :api do
    namespace :v1 do
      resources :tasks
    end
  end
  get '*path', to: 'home#home', via: :all
end

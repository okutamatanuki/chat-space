Rails.application.routes.draw do
  devise_for :users
  get '/messages' => 'messages#index'
  resources :users, only: [:edit, :update]
  resouces :groups, only: [:new, :create, :edit, :update] do
    resouces :messages, only: [:index, :create]
end
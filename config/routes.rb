Rails.application.routes.draw do

  resources :locations
  resources :clues
  resources :users
  resources :games

  root to: "homepage#index"
  # get '/creative' => 'creatives#creative'
  get 'signup' => 'users#new'
  get 'login'   => 'sessions#new'
  post 'login'   => 'sessions#create'
  get 'logout'  => 'sessions#destroy'
  post 'score' => 'locations#score'

end

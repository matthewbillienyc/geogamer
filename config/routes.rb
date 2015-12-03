Rails.application.routes.draw do

  resources :locations
  resources :clues
  resources :users
  root to: "application#index"
  get '/creative' => 'creatives#creative'
  get 'signup' => 'users#new'
  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'

end

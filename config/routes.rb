Rails.application.routes.draw do
  
  mount_ember_app :frontend, to: "/"

  namespace :api do
    namespace :v1 do
      resources :users, :defaults => { :format => 'json' }
      resources :locations, :defaults => { :format => 'json' }
    end
  end

  resources :locations
  resources :clues
  resources :users
  resources :games
  namespace :admin do
    resources :users
  end

  root to: "homepage#index"

  # get '/creative' => 'creatives#creative'
  get 'signup' => 'users#new'
  get 'login'   => 'sessions#new'
  post 'login'   => 'sessions#create'
  get 'logout'  => 'sessions#destroy'
  post 'score' => 'locations#score'
  get '/startlocation' => 'locations#create'
  get '/won' => 'games#won'
  get '/continue' => 'locations#continue'
  get '/chart' => 'admins#chart_info'

end

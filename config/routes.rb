Rails.application.routes.draw do

root 'home#index'

  get '/history' => 'history#index'

  get '/life' => 'life#index'

  get '/animal' => 'animal#index'

  get '/beauty' => 'beauty#index'

  resources :comments

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

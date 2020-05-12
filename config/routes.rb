Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  
  get '/categories', to: 'categories#index'
  get '/categories/:id', to: 'categories#show'
  resources :categories

  get '/dances/:id', to: 'dances#show'
  get '/dances/:id/edit', to: 'dances#edit'
  put '/dances/:id', to: 'dances#update'
  resources :dances
  # For details on the DSL available  within this file, see https://guides.rubyonrails.org/routing.html
end




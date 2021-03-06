Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/users/:id', to: 'users#belongs_to_user'
  resources :users
  
  get '/categories', to: 'categories#index'
  get '/categories/:id', to: 'categories#show'
  resources :categories
  
  get '/dances/:id', to: 'dances#show'
  # get '/dances/:id/edit', to: 'dances#edit'
  # post '/dances', to: 'dances#create'
  # put '/dances/:id', to: 'dances#update'
  resources :dances


 
  # For details on the DSL available  within this file, see https://guides.rubyonrails.org/routing.html
end




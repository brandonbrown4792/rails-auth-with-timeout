Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login', :to => 'sessions#create'
  get '/get-user-by-token', :to => 'users#get_by_token'
end

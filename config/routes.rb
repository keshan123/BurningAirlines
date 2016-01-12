Rails.application.routes.draw do
  root :to => 'planes#new'
  resources :users
  resources :flights
  resources :planes
  resources :session
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end

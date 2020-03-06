Rails.application.routes.draw do
  resources :pharmacies
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users

  resources :pharmacies

end
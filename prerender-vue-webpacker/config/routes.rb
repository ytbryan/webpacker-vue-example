Rails.application.routes.draw do
  resources :pages
  root 'pages#index'
  get '/products/:id', to: 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

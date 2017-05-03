Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'

  resources :groups ,except: [:index,:show,:delete] do
    resources :messages,only: [:index]
  end

end

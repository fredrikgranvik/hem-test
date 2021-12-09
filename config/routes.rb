Rails.application.routes.draw do
  root 'movies#index'

  # Search
  match 'search(/:search)', :to => 'movies#search', :as => :search, via: [:get, :post]

end

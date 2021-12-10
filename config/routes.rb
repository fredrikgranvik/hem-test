Rails.application.routes.draw do
  root 'movies#index'

  # Search
  # Added Wildcard segment
  match 'search/*omdb(/:search)(/:type)(/:year)', :to => 'movies#search', :as => :search, via: [:get, :post]

end

Rails.application.routes.draw do
  get 'movies/index'
  get 'movies/search'

  root 'movies#index'
end

class MoviesController < ApplicationController
  def index
  end

  def search
    query = params[:search]

    return nil if !query

    uri = URI(Rails.application.config.omdb_url)
    parameters = { :apikey => Rails.application.config.omdb_key, :s => query }
    uri.query = URI.encode_www_form(parameters)

    res = Net::HTTP.get_response(uri)
    render :json => res.body if res.is_a?(Net::HTTPSuccess)
  end
end

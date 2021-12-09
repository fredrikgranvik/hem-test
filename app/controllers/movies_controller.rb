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

    respond_to do |format|
      format.json { render :json => res.body }
      format.html
    end
  end
end

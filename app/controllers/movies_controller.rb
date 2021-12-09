class MoviesController < ApplicationController
  def index
  end

  def search

    title = params[:search]
    year = params[:year]
    page =  params[:page]

    return nil if !title

    uri = URI(Rails.application.config.omdb_url)
    parameters = {
      apikey: Rails.application.config.omdb_key,
      s: title,
      y: year,
      page: page
    }
    uri.query = URI.encode_www_form(parameters)

    res = Net::HTTP.get_response(uri)
    @result = res.body

    respond_to do |format|
      format.json { render :json => @result }
      format.html
    end
  end
end

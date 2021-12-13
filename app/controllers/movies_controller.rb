class MoviesController < ApplicationController
  require 'json'

  def index
  end

  def search

    title = params[:search]
    year = params[:year]
    page =  params[:page]
    type =  params[:type]

    return nil if !title

    uri = URI(Rails.application.config.omdb_url)
    parameters = {
      apikey: Rails.application.config.omdb_key,
      s: title,
      y: year,
      page: page,
      type: type,
      plot: "short"
    }
    uri.query = URI.encode_www_form(parameters)

    res = Net::HTTP.get_response(uri)

    @result = JSON.parse res.body
    @result[:title] = title
    @result[:year] = year
    @result[:page] = page
    @result[:type] = type

    respond_to do |format|
      format.html
      # format.json { render :json => @result.to_json }
    end
  end
end

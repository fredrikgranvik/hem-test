class MoviesController < ApplicationController
  require 'json'

  def index
  end

  def search

    byebug

    title = params[:title]
    year = params[:year]
    page =  params[:page]
    type =  params[:type]

    #
    # Put res in cache
    # Enable cache for development: rails dev:cache
    #
    #res = Rails.cache.fetch([title, type, year], :expires => 10.minutes) do
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
    #end

    @result = JSON.parse res.body
    @result[:title] = title
    @result[:year] = year
    @result[:page] = page
    @result[:type] = type
    @result[:base_path] = Search_path

    respond_to do |format|
      format.json { render :json => @result.to_json }
      format.html
    end

  end

end

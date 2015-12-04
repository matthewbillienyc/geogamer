class HomepageController < ApplicationController
  
  def index
    binding.pry
    flickr = Adapters::FlickrConnection.new
    flickr.get_photo_url('testplace')
    render 'homepage/homepage'
  end

end
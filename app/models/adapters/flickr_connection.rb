module Adapters
  class FlickrConnection

    def initialize
      @conn = Flickr.new(File.join(Rails.root, 'config', 'flickr.yml'))
    end

    def get_photo_url(country_name)
      @conn.photos.search(text: "#{country_name} landscape", content_type: 1)[rand(5)].url('large')
    end

  end
end
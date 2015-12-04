require 'open-uri'

module Adapters
  class DataScraper

    def initialize(country_name)
      country_name_formatted = country_name.gsub(' ', '-')
      @html = Nokogiri::HTML(open("http://country.io/#{country_name_formatted}"))
      binding.pry
    end

  end
end

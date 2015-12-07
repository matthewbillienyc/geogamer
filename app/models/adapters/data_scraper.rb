require 'open-uri'

module Adapters
  class DataScraper

    def initialize(country_name)
      country_name_formatted = country_name.gsub(' ', '-').downcase
      @html = Nokogiri::HTML(open("http://country.io/#{country_name_formatted}/"))
      get_capital
      get_currency
    end

    def get_capital
      capital_row = @html.at('tr:contains("Capital")')
      if capital_row
        datatype_data_hash["capital"]= capital_row.css('td')[1].inner_html
      end
    end

    def datatype_data_hash
      @datatype_data_hash ||= {
      }
    end

  end
end

# datatype_ids:
# 1: capital
# 2: language
# 3: currency
# 4: population (round to 100,000)
# 5: continent
# 6: land area (round to 10,000 km2)
# 7: terrain
# 8: climate
# 9: neighbors
# 10: life expectancy (round to 1%)
# 11: literacy rate
# 12: roadways (round to 1000 km)
# 13: GDP

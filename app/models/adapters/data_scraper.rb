require 'open-uri'

module Adapters
  class DataScraper

    def initialize(country_name)
      country_name_formatted = country_name.gsub(' ', '-').downcase
      @html = Nokogiri::HTML(open("http://country.io/#{country_name_formatted}/"))
      get_data
    end

    def table_rows
      ["Capital", "Main Language", "Currency", "Population", "Continent", "Land", "Terrain", "Climate", "Natural Hazards", "Life Expectancy", "Literacy", "Roadways", "GDP"]
    end

    def get_data
      table_rows.each_with_index do |name, index|
        row = @html.at("tr:contains('#{name}')")
        blanks = ["-", "%", "None", "", "years", "km", " years", " km", "None km", "$"]
        if row
          data = row.css('td')[1].inner_html
          unless blanks.include?(data)
            datatype_data_hash["#{index+1}"]= data
          end
        end
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
# 9: natural hazards
# 10: life expectancy (round to 1%)
# 11: literacy rate
# 12: roadways (round to 1000 km)
# 13: GDP

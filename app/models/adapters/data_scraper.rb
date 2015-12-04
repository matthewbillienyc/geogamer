require 'open-uri'

module Adapters
  class DataScraper

    def initialize(country_name)
      country_name_formatted = country_name.gsub(' ', '-').downcase
      @html = Nokogiri::HTML(open("http://country.io/#{country_name_formatted}/"))
      extract_data_first_table
      extract_data_second_table
      extract_data_third_table
      extract_data_neighbors
      extract_data_demographics
      extract_data_roadways_and_add_to_hash
    end

    def extract_data_first_table
      first_table = @html.css('#summary > div:nth-child(1) > table')
      first_table_tds = first_table.css('td')
      first_table_array = first_table_tds.each_with_object([]) { |td, arr|
        arr << td.inner_html
      }
      add_first_table_data_to_hash(first_table_array)
    end

    def add_first_table_data_to_hash(first_table_array)
      datatype_data_hash[:"1"]= first_table_array[10]
      datatype_data_hash[:"2"]= first_table_array[13]
      datatype_data_hash[:"3"]= first_table_array[16]
      datatype_data_hash[:"4"]= first_table_array[19]
      datatype_data_hash[:"5"]= first_table_array[22]
    end

    def extract_data_second_table
      second_table = @html.css('#content > div > div.col-sm-10.cc-home-block > div:nth-child(2) > div:nth-child(2) > table')
      second_table_tds = second_table.css('td')
      second_table_array = second_table_tds.each_with_object([]) { |td, arr|
        arr << td.inner_html
      }
      add_second_table_data_to_hash(second_table_array)
    end

    def add_second_table_data_to_hash(second_table_array)
      datatype_data_hash[:"6"]= second_table_array[1]
      datatype_data_hash[:"7"]= second_table_array[7]
      datatype_data_hash[:"8"]= second_table_array[10]
    end

    def extract_data_third_table
      third_table = @html.css('#content > div > div.col-sm-10.cc-home-block > div:nth-child(2) > div:nth-child(3) > table')
      third_table_tds = third_table.css('td')
      third_table_array = third_table_tds.each_with_object([]) { |td, arr|
        arr << td.inner_html
      }
      add_third_table_data_to_hash(third_table_array)
    end

    def add_third_table_data_to_hash(third_table_array)
      datatype_data_hash[:"9"]= third_table_array[1]
    end

    def extract_data_neighbors
      neighbors_elements = @html.css('#content > div > div.col-sm-10.cc-home-block > div.cc-neighbour > p')
      neighbor_as = neighbors_elements.css('a')
      neighbors_array = neighbor_as.each_with_object([]) { |a, arr|
        arr << a.inner_html
      }
      add_neighbors_to_hash(neighbors_array)
    end

    def add_neighbors_to_hash(neighbors_array)
      neighbors_string = neighbors_array.join(', ')
      datatype_data_hash[:"10"]= neighbors_string
    end

    def extract_data_demographics
      demographics_els = @html.css('#content > div > div.col-sm-10.cc-home-block > div:nth-child(5)')
      demographics_tds = demographics_els.css('td')
      demographics_array = demographics_tds.each_with_object([]) { |td, arr|
        arr << td.inner_html
      }
      add_demographics_data_to_hash(demographics_array)
    end

    def add_demographics_data_to_hash(demographics_array)
      datatype_data_hash[:"11"]= demographics_array[1]
      datatype_data_hash[:"12"]= demographics_array[16]
    end

    def extract_data_roadways_and_add_to_hash
      roadways_table = @html.css('#content > div > div.col-sm-10.cc-home-block > div:nth-child(6) > div > table')
      roadways_tds = roadways_table.css('td')
      roadways_array = roadways_tds.each_with_object([]) { |td, arr|
        arr << td.inner_html
      }
      datatype_data_hash[:"13"]= roadways_array[1]
    end

    def datatype_data_hash
      @datatype_data_hash ||= {
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": "",
        "13": ""
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

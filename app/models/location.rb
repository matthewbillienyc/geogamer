# == Schema Information
#
# Table name: locations
#
#  id         :integer          not null, primary key
#  name       :string
#  img_url    :string
#  latitude   :float
#  longitude  :string
#  float      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ActiveRecord::Base
  has_many :games, through: :game_locations
  has_many :game_locations

  has_many :clues
  has_many :challenges

  def set_clues_to_unused
    self.clues.each do |clue|
      clue.status = 'unused'
      clue.save
    end
  end

  def location_data_hash
    @location_data_hash ||= {}
  end

  def scrape_data(country_name)
    # initialzie DataScraper.new(country_name)
  end

  def build_clues
    # build out clues based on scraped data
  end

end

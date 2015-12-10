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
  has_many :game_locations
  has_many :games, through: :game_locations

  has_many :clues
  has_many :challenges
  validates_presence_of :name
  validates_uniqueness_of :name

  def set_clues_to_unused
    self.clues.each do |clue|
      clue.status = 'unused'
      clue.save
    end
  end

  def location_data_hash
    @location_data_hash ||= {}
  end

  def get_img_url
    url_fetcher = Adapters::FlickrConnection.new
    self.img_url = url_fetcher.get_photo_url(self.name)
  end

  def scrape_data()
    @scraper = Adapters::DataScraper.new(self.name)
  end

  def build_clues
    @scraper.datatype_data_hash.each do |datatype_id, data|
      clue = Clue.create({datatype_id: datatype_id.to_s.to_i, location_id: self.id, data: data})
    end
    # build out clues based on scraped data
  end

  def used_clues_count
    Clue.where(location_id: self.id, status: "used").length
  end

  def self.most_used_location_across_games
    joins(:games).select("locations.name, COUNT(games) AS num_games").group(:name).order("num_games DESC").first
  end

end

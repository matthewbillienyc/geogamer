# == Schema Information
#
# Table name: locations
#
#  id         :integer          not null, primary key
#  name       :string
#  latitude   :float
#  longitude  :string
#  float      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ActiveRecord::Base
  has_many :games, through: :game_location
  has_many :game_locations

  has_many :clues
  has_many :challenges

end

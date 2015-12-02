# == Schema Information
#
# Table name: game_locations
#
#  id          :integer          not null, primary key
#  game_id     :integer
#  location_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class GameLocation < ActiveRecord::Base
  belongs_to :game
  belongs_to :location
end

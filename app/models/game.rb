# == Schema Information
#
# Table name: games
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Game < ActiveRecord::Base
  belongs_to :user
  
  has_many :locations, through: :game_locations
  has_many :game_locations

end

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

  has_many :game_clues
  has_many :clues, through: :game_clues

  def visited_locations
    self.locations.each_with_object([]) do |loc, arr|
      arr << loc.name
    end
  end

  def completed?
    if self.locations.length > 1
      true
    else
      false
    end
  end

end

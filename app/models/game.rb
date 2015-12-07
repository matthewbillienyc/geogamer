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

  def visited_location_names
    self.locations.each_with_object([]) do |location, arr|
      arr << location.name
    end
  end

  def pick_new_location_name
    name = Country.choose_random_country
    while self.visited_location_names.include?(name)
      name = Country.choose_random_country
    end
    return name
  end

  def completed?
    if self.locations.length > 4
      true
    else
      false
    end
  end

end

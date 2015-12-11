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

  has_many :game_locations
  has_many :locations, through: :game_locations

  has_many :game_clues
  has_many :clues, through: :game_clues

  def visited_location_names
    self.locations.map do |location|
      location.name
    end
  end

  def truncated_date
    created_at.to_s[0..9]
  end

  def pick_new_location_name
    #name = Country.choose_random_country
    if self.locations.length <= 1
      name = Country.choose_random_easy_country
    elsif self.locations.length <= 2
      name = Country.choose_random_medium_country
    elsif self.locations.length <= 3
      name = Country.choose_random_hard_country
    else
      name = Country.choose_random_really_hard_country
    end

    while self.visited_location_names.include?(name)
      name = Country.choose_random_country
    end

    return name
  end

  def completed?
    self.locations.length > 5
  end

end

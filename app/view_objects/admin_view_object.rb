class AdminViewObject

  def total_games_played_response(user)
    total = user.total_number_games
    if total == 0
      "#{user.capitalize_name} hasn't played any games."
    elsif total == 1
      "#{user.capitalize_name} has played one game."
    else
      "#{user.capitalize_name} has played #{total} games."
    end
  end

  def average_clues_per_game_response(user)
    average = user.average_clues_per_game
    if !average
      "No data to analyze."
    else
      "#{user.capitalize_name} has an average of #{average} clues used per game."
    end
  end

  def average_clues_per_location_response(user)
    average = user.average_clues_per_location_across_all_games
    if !average
      "No data to analyze"
    else
      "#{user.capitalize_name} has an average of #{average} clues used per location."
    end
  end

  def user_with_most_locations
    user = User.user_with_most_locations
    "#{user.capitalize_name}"
  end

  def most_used_location_across_games
    location = Location.most_used_location_across_games
    "#{location.name}"
  end

  def most_used_clue_across_all_games
    clue = Clue.most_used_clue_across_all_games
    clue_type = clue.find_clue_datatype
    "#{clue_type.capitalize}"
  end
end

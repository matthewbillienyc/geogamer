class AdminViewObject

  def initialize(user)
    @user = user
  end

  def total_games_played_response
    total = @user.total_number_games
    if total == 0
      "#{@user.capitalize_name} hasn't played any games."
    elsif total == 1
      "#{@user.capitalize_name} has played one game."
    else
      "#{@user.capitalize_name} has played #{total} games."
    end
  end

  def average_clues_per_game_response
    average = @user.average_clues_per_game
    if !average
      "No data to analyze."
    else
      "#{@user.capitalize_name} has an average of #{average} clues used per game."
    end
  end

  def average_clues_per_location_response
    average = @user.average_clues_per_location_across_all_games
    if !average
      "No data to analyze"
    else
      "#{@user.capitalize_name} has an average of #{average} clues used per location."
    end
  end

end

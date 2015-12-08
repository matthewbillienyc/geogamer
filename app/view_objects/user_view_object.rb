class UserViewObject

  def initialize(user)
    @user = user
  end

  def total_games_response
    total = @user.total_number_games
    if total == 0
      "You haven't played a single freakin' game! Come on!"
    elsif total == 1
      "You've only played #{total} game! Play more!"
    else
      "You've played #{total} games. Nice! Keep on truckin'!"
    end
  end

  def total_locations_response
    total = @user.total_locations_visited
    if total == 0
      "You have not yet visited any locations! Play a game!"
    elsif total == 1
      "You have only visited #{total} location! On with it!"
    else
      "You've visited #{total} locations. Nice! Visit some more!"
    end
  end

  def total_clues_response
    total = @user.total_clues_used
    if total == 0
      "You haven't used a single clue... Good job??"
    elsif total == 1
      "You only had to use ONE clue! Or you only played for about 3 seconds..."
    else
      "You've used #{total} clues! Keep playing!"
    end
  end

end

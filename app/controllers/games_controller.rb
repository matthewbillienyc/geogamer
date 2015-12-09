class GamesController < ApplicationController

	def create
		@game = Game.create
		@game.user = current_user
		@game.save
    session[:game_id] = @game.id
		redirect_to startlocation_path
		# redirect_to :controller => 'locations', :action => 'create'
	end

	def won
		current_game.status = "completed"
		current_game.save
		@score = current_game.score
		session[:game_id] = nil
	end

	def show
		@game = Game.find(params["id"])
		render :partial => "games/game", locals: {:game => @game}
	end

	def continue
		@game = Game.find(current_user.games.last.id)
		session[:game_id] = @game.id
		redirect_to startlocation_path
	end

end

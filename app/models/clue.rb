# == Schema Information
#
# Table name: clues
#
#  id          :integer          not null, primary key
#  location_id :integer
#  datatype_id :integer
#  data        :string
#

class Clue < ActiveRecord::Base
  belongs_to :location
  belongs_to :datatype
  has_many :game_clues
  has_many :games, through: :game_clues
  validates_presence_of :data, :location_id

  def self.unused_clues(location_id)
    self.where(location_id: location_id, status: 'unused')
    # self.where('location_id = ? AND status = ?', location_id, "unused")
  end


  def self.random_easy_clue(location_id)
  	where(location_id: location_id, status: 'unused').select do |clue|
  		clue.datatype.difficulty == "easy"
  	end.sample
  end

  def self.random_medium_clue(location_id)
  	where(location_id: location_id, status: 'unused').select do |clue|
  		clue.datatype.difficulty == "medium"
  	end.sample
  end

  def self.random_hard_clue(location_id)
  	where(location_id: location_id, status: 'unused').select do |clue|
  		clue.datatype.difficulty == "hard"
  	end.sample
  end

  def self.most_used_clue_across_all_games
    joins(:games).select("clues.id, COUNT(games) AS game_count").group(:id).order("game_count DESC").first
  end

  def find_clue_datatype
    clue = Clue.find(self.id)
    datatype = Datatype.find(clue.datatype_id)
    datatype.dtype
  end
end

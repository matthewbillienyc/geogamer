class CreateGameClues < ActiveRecord::Migration
  def change
    create_table :game_clues do |t|
      t.integer :game_id
      t.integer :clue_id
    end
  end
end

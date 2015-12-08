class AddDifficultyToDatatypes < ActiveRecord::Migration
  def change
  	add_column :datatypes, :difficulty, :string
  end
end

class AddLastLocationToGames < ActiveRecord::Migration
  def change
    add_column :games, :last_location_id, :integer
  end
end

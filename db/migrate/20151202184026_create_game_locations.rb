class CreateGameLocations < ActiveRecord::Migration
  def change
    create_table :game_locations do |t|
      t.integer :game_id
      t.integer :location_id

      t.timestamps null: false
    end
  end
end

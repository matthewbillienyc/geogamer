class AddStatusToCluesAndLocations < ActiveRecord::Migration
  def change
    add_column :clues, :status, :string
    add_column :locations, :status, :string
  end
end

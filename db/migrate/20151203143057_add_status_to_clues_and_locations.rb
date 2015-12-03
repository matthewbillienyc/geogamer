class AddStatusToCluesAndLocations < ActiveRecord::Migration
  def change
    add_column :clues, :status, :string, :default => "unused"
    add_column :locations, :status, :string, :default => "unused"
  end
end

class AddStatusToCluesAndLocations < ActiveRecord::Migration
  def change
    add_column :clues, :status, :string, :default => "unused"
  end
end

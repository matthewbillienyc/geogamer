class CreateClues < ActiveRecord::Migration
  def change
    create_table :clues do |t|
      t.string :hint_string
      t.string :datatype
      t.integer :location_id

      t.timestamps null: false
    end
  end
end

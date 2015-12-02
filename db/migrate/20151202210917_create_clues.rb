class CreateClues < ActiveRecord::Migration
  def change
    create_table :clues do |t|
      t.integer :location_id
      t.integer :datatype_id
      t.string :data
    end
  end
end

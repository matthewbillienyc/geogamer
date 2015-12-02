class CreateDatatypes < ActiveRecord::Migration
  def change
    create_table :datatypes do |t|
      t.string :dtype
      t.string :lead_in
    end
  end
end

class CreatePlanes < ActiveRecord::Migration
  def change
    create_table :planes do |t|
      t.string :name
      t.integer :rows
      t.string :columns

      t.timestamps null: false
    end
  end
end

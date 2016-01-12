class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :flight_id
      t.integer :seat_row
      t.string :seat_column

      t.timestamps null: false
    end
  end
end

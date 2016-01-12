class AddPlaneIdToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :plane_id, :integer
  end
end

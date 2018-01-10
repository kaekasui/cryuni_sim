class AddPositionToHeros < ActiveRecord::Migration[5.1]
  def change
    add_column :heros, :position, :integer, null: false
  end
end

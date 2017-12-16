class AddLockedToHeros < ActiveRecord::Migration[5.1]
  def change
    add_column :heros, :locked, :boolean, default: true, null: false
  end
end

class RenameColumnMonsterNameToCards < ActiveRecord::Migration[5.1]
  def change
    rename_column :cards, :monster_name, :name
  end
end

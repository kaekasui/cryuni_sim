class AddTypeToAttachedAbilities < ActiveRecord::Migration[5.1]
  def change
    add_column :attached_abilities, :type, :string, null: false
  end
end

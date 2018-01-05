class AddNameToGrades < ActiveRecord::Migration[5.1]
  def change
    add_column :grades, :name, :string, null: false
  end
end

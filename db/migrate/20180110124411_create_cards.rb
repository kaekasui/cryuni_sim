class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :monster_name, null: false
      t.integer :min_grade, null: false
      t.integer :max_grade, null: false
      t.string :image_name

      t.timestamps
    end
  end
end

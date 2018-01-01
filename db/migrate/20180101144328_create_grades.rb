class CreateGrades < ActiveRecord::Migration[5.1]
  def change
    create_table :grades do |t|
      t.integer :level, null: false
      t.string :image_name, null: false

      t.timestamps
    end
  end
end

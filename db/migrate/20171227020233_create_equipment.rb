class CreateEquipment < ActiveRecord::Migration[5.1]
  def change
    create_table :equipment do |t|
      t.string :name, null: false
      t.integer :part, null: false
      t.integer :level, null: false
      t.integer :min_grade, null: false
      t.integer :max_grade, null: false
      t.integer :card_slot, null: false
      t.string :image_name

      t.timestamps
    end
  end
end

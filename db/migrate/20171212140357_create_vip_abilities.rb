class CreateVipAbilities < ActiveRecord::Migration[5.1]
  def change
    create_table :vip_abilities do |t|
      t.integer :vip_level, null: false
      t.string :image_name, null: false

      t.timestamps
    end
  end
end

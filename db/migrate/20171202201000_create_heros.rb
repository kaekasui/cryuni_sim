class CreateHeros < ActiveRecord::Migration[5.1]
  def change
    create_table :heros do |t|
      t.string :name, null: false
      t.string :image_name

      t.timestamps
    end
  end
end

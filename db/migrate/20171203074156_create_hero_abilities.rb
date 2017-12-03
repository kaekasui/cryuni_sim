class CreateHeroAbilities < ActiveRecord::Migration[5.1]
  def change
    create_table :hero_abilities do |t|
      t.references :hero, foreign_key: true, null: false
      t.integer :intimacy_level_from, null: false
      t.integer :intimacy_level_to, null: false
      t.integer :stage

      t.timestamps
    end
  end
end

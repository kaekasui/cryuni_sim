class CreateAttachedAbilities < ActiveRecord::Migration[5.1]
  def change
    create_table :attached_abilities do |t|
      t.references :ability, foreign_key: true, null: false
      t.references :hero_ability, foreign_key: true, null: false
      t.decimal :score, null: false
      t.string :unit, null: false

      t.timestamps
    end
  end
end

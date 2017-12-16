class AddHeroIdToAttachedAbilities < ActiveRecord::Migration[5.1]
  def change
    add_reference :attached_abilities, :hero, foreign_key: true
  end
end

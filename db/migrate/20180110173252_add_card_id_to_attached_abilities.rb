class AddCardIdToAttachedAbilities < ActiveRecord::Migration[5.1]
  def change
    add_reference :attached_abilities, :card, foreign_key: true
  end
end

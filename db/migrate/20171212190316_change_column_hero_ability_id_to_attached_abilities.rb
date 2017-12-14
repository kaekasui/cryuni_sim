class ChangeColumnHeroAbilityIdToAttachedAbilities < ActiveRecord::Migration[5.1]
  def up
    change_column :attached_abilities, :hero_ability_id, :bigint, null: true
  end

  def down
    change_column :attached_abilities, :hero_ability_id, :bigint, null: false
  end
end

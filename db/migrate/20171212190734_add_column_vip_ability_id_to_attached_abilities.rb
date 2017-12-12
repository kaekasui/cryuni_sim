class AddColumnVipAbilityIdToAttachedAbilities < ActiveRecord::Migration[5.1]
  def change
    add_reference :attached_abilities, :vip_ability, index: true, foreign_key: true
  end
end

class AddEquipageIdAndGradeIdToAttachedAbilities < ActiveRecord::Migration[5.1]
  def change
    add_reference :attached_abilities, :equipage, index: true, foreign_key: true
    add_reference :attached_abilities, :grade, index: true, foreign_key: true
  end
end

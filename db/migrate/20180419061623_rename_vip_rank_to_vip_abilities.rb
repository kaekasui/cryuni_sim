class RenameVipRankToVipAbilities < ActiveRecord::Migration[5.1]
  def change
    rename_column :vip_abilities, :vip_level, :vip_rank
  end
end

class AddWholeImageNameToHero < ActiveRecord::Migration[5.1]
  def change
    add_column :heros, :whole_image_name, :string
  end
end

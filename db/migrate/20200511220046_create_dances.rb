class CreateDances < ActiveRecord::Migration[6.0]
  def change
    create_table :dances do |t|
      t.string :name
			t.string :image
			t.string :description
      t.references :category
      t.references :user
      t.timestamps
    end
  end
end

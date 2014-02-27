class CreateWastes < ActiveRecord::Migration
  def change
    create_table :wastes do |t|
      t.integer :user_id
      t.string :title
      t.integer :amount

      t.timestamps
    end
    add_index :wastes, [:user_id, :created_at]
  end
end

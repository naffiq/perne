class CreateTexts < ActiveRecord::Migration
  def change
    create_table :texts do |t|
      t.text :text

      t.timestamps
    end
  end
end

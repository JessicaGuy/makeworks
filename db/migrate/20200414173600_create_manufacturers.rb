class CreateManufacturers < ActiveRecord::Migration[6.0]
  def change
    create_table :manufacturers do |t|
      t.references :company, null: false, foreign_key: true
      t.references :manufacturer_taxonomy, null: false, foreign_key: true

      t.timestamps
    end
  end
end

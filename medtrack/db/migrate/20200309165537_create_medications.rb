class CreateMedications < ActiveRecord::Migration[6.0]
  def change
    create_table :medications do |t|
      t.string :brand_name
      t.string :generic_name
      t.boolean :taken
      t.integer :pills_left
      t.string :strength
      t.string :dosage
      t.string :notes
      t.string :time
      t.boolean :with_food
      t.string :prescribing_doctor
      t.string :doctor_phone
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

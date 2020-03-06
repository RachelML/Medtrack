class CreatePharmacies < ActiveRecord::Migration[6.0]
  def change
    create_table :pharmacies do |t|
      t.string :pharm_name
      t.string :address
      t.string :phone_number
      t.string :comment

      t.timestamps
    end
  end
end

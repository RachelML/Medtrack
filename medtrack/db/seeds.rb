# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pharmacy.create!(pharm_name: 'CVS', address: '123 Sesame Street', phone_number: '8888888', comment: 'this is a comment', user_id: 1)
Medication.create!(brand_name: 'Lipitor', taken: false, pills_left: 25, dosage: "25 mg", with_food: true, prescribing_doctor: "Dr. Smith", doctor_phone: "123-456-7891", user_id: 1)



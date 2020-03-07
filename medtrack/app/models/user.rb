class User < ApplicationRecord
    has_secure_password

    has_many :pharmacies


    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end

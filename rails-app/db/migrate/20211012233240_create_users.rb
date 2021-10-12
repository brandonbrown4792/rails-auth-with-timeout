class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.datetime :last_logged_in
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end

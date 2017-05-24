class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :nickname
      t.string :email
      t.string :phone
      t.boolean :royal
      t.boolean :alive
      t.boolean :single
      t.timestamps
    end
  end
end

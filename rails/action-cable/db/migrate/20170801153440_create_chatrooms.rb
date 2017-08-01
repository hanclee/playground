class CreateChatrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :chatrooms do |t|
      t.string :topic
      t.string :slug, index: true, unique: true

      t.timestamps
    end
  end
end

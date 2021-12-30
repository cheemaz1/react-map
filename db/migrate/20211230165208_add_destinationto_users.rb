class AddDestinationtoUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :destination, :string
  end
end

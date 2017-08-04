require 'minitest/autorun'

class UserTest < Minitest::Test
  def test_should_not_save_user_without_username
    user = User.new
    assert !user.save
  end
end

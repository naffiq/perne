require 'test_helper'

class WastesControllerTest < ActionController::TestCase
  test "should get add" do
    get :add
    assert_response :success
  end

  test "should get remove" do
    get :remove
    assert_response :success
  end

  test "should get get" do
    get :get
    assert_response :success
  end

  test "should get edit" do
    get :edit
    assert_response :success
  end

end

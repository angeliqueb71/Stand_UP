require 'test_helper'

class FactsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get facts_index_url
    assert_response :success
  end

  test "should get new" do
    get facts_new_url
    assert_response :success
  end

  test "should get create" do
    get facts_create_url
    assert_response :success
  end

end

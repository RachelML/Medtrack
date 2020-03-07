require 'test_helper'

class PharmaciesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pharmacy = pharmacies(:one)
  end

  test "should get index" do
    get pharmacies_url, as: :json
    assert_response :success
  end

  test "should create pharmacy" do
    assert_difference('Pharmacy.count') do
      post pharmacies_url, params: { pharmacy: { address: @pharmacy.address, comment: @pharmacy.comment, pharm_name: @pharmacy.pharm_name, phone_number: @pharmacy.phone_number, user_id: @pharmacy.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show pharmacy" do
    get pharmacy_url(@pharmacy), as: :json
    assert_response :success
  end

  test "should update pharmacy" do
    patch pharmacy_url(@pharmacy), params: { pharmacy: { address: @pharmacy.address, comment: @pharmacy.comment, pharm_name: @pharmacy.pharm_name, phone_number: @pharmacy.phone_number, user_id: @pharmacy.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy pharmacy" do
    assert_difference('Pharmacy.count', -1) do
      delete pharmacy_url(@pharmacy), as: :json
    end

    assert_response 204
  end
end

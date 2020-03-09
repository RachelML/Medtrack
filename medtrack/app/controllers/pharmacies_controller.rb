class PharmaciesController < ApplicationController
  before_action :set_user
  before_action :set_pharmacy, only: [:show, :update, :destroy]

  # GET /pharmacies
  def index
    # @pharmacies = Pharmacy.all

    render json: @user.pharmacies
  end

  # GET /pharmacies/1
  def show
    render json: @pharmacy
  end

  # POST /pharmacies
  def create
    @user.pharmacies.create!(pharmacy_params)

    # @pharmacy = Pharmacy.new(pharmacy_params)

    if @pharmacy.save
      render json: @pharmacy, status: :created, location: @pharmacy
    else
      render json: @pharmacy.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pharmacies/1
  def update
    if @pharmacy.update(pharmacy_params)
      render json: @pharmacy
    else
      render json: @pharmacy.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pharmacies/1
  def destroy
    @pharmacy.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def pharmacy_params
      params.permit(:name, :done)
    end
  
    def set_user
      @user = User.find(params[:user_id])
    end
  
    def set_pharmacy
      @pharmacy = @user.pharmacies.find_by!(id: params[:id]) if @user
    end

    # def set_pharmacy
    #   @pharmacy = Pharmacy.find(params[:id])
    # end

    # # Only allow a trusted parameter "white list" through.
    # def pharmacy_params
    #   params.require(:pharmacy).permit(:pharm_name, :address, :phone_number, :comment, :user_id)
    # end
end

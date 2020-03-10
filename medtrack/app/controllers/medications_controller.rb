class MedicationsController < ApplicationController
  # before_action :set_user
  before_action :authorize_request
  before_action :set_medication, only: [:show, :update, :destroy]

  # GET /medications
  def index
    # @medications = Medication.all

    @medications = @current_user.medications

    render json: @medications
  end

  # GET /medications/1
  def show
    render json: @medication
  end

  # POST /medications
  def create
    @medication = @current_user.medications.build(medication_params)

    if @medication.save
      render json: @medication, status: :created
    else
      render json: @medication.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /medications/1
  def update
    if @medication.update(medication_params)
      render json: @medication
    else
      render json: @medication.errors, status: :unprocessable_entity
    end
  end

  # DELETE /medications/1
  def destroy
    print "test delete"
    @medication.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.

    def medication_params
      params.require(:medication).permit(:brand_name, :dosage, :pills_left, :prescribing_doctor, :doctor_phone, :done)
    end
  
    def set_user
      @user = User.find(params[:user_id])
    end


    def set_medication
      @medication = Medication.find(params[:id])
    end

    # # Only allow a trusted parameter "white list" through.
    # def medication_params
    #   params.require(:medication).permit(:brand_name, :generic_name, :taken, :pills_left, :strength, :dosage, :notes, :time, :with_food, :prescribing_doctor, :doctor_phone, :user_id)
    # end
end

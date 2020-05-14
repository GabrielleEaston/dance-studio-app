class DancesController < ApplicationController
  before_action :set_dance, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    @dances = Dance.all
    render json: @dances
	end


def show 
  @dance = Dance.find(params[:id])  
  render json: @dance 
end

def create
  @dance = Dance.new(dance_params)
  if @dance.save
    render json: @dance, status: :created, location: @dance
  else
    render json: @dance.errors, status: :unprocessable_entity
  end
end

def edit 
  @dance = Dance.find(params[:id]) 
end

def update
  @dance = Dance.find(params[:id])
    if @dance.update(dance_params)
      render json: @dance
    else
      render json: @dance.errors, status: :unprocessable_entity
    end
end

def destroy
  # @dance = Dance.find(params[:id])
  @dance.destroy
end

private
def set_dance
  @dance = Dance.find(params[:id])
end

  def dance_params 
    params.require(:dance).permit(:name, :description, :image, :category_id, :user_id) 
  end


end 
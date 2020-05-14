class CategoriesController < ApplicationController

  def index
    @categories = Category.all
    render json: @categories
    
  end

	def show 
  	@category = Category.find(params[:id]) 
    @dances = @category.dances 
    render json: @dances
	end
  
end

########## 
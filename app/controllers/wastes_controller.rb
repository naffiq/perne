class WastesController < ApplicationController
  before_filter :authenticate_user, :only => [:add, :remove, :get, :edit]
  layout "ajax"

  def add
  	new_waste = @current_user.wastes.build(title: params[:title], amount: params[:amount])
  	if new_waste.save
  		flash[:notice] = 'Waste was successfully added'
  	else
  		flash[:notice] = 'There was a problem adding a waste'
  	end
  	redirect_to '/home'
  end

  def remove
  end

  def get
  end

  def edit
  end

  def waste_params
    params.require(:user).permit(:title, :amount)
  end
end

class SessionsController < ApplicationController
  before_filter :authenticate_user, :only => [:home, :profile, :setting]
  before_filter :save_login_state, :only => [:login, :login_attempt]

  def login
  	render :layout => "login"
  end

  def home
    @daily_waste = 0
    daily_count = @current_user.wastes.where('created_at > ?', DateTime.now.beginning_of_day).all
    daily_count.each do |dc|
      @daily_waste = @daily_waste + dc.amount
    end
    @weekly_waste = 0
    weekly_count = @current_user.wastes.where('created_at > ?', Date.today.beginning_of_week).all
    weekly_count.each do |wc|
      @weekly_waste = @weekly_waste + wc.amount
    end
    @monthly_waste = 0
    monthly_count = @current_user.wastes.where('created_at > ?', Date.today.beginning_of_month).all
    monthly_count.each do |mc|
      @monthly_waste = @monthly_waste + mc.amount
    end
  end

  def profile
  end

  def setting
  end

  def logout
  	session[:user_id] = nil
  	redirect_to :action => 'login'
  end

  def login_attempt
  	authorized_user = User.authenticate(params[:username_or_email], params[:login_password])
  	if authorized_user
  		session[:user_id] = authorized_user.id
  		flash[:notice] = "Wow, welcome again, you logged in as #{authorized_user.username}"
  		redirect_to '/home'
  	else
  		flash[:notice] = "Invalid username/email and password combination"
  		render "login", :layout => "login"
  	end
  end
end

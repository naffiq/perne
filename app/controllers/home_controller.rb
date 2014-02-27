class HomeController < ApplicationController
  layout = 'typer'

  def home
  	@text = Text.first(:order => "RANDOM()")
  end
end

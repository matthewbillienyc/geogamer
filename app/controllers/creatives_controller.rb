class CreativesController < ApplicationController
  layout "creative"

  def index
    render 'layouts/creative'
  end

end

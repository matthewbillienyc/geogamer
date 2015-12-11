class Api::V1::LocationsController < ApplicationController
  respond_to :json

  def index
    respond_with Location.all
  end

  def show
    respond_with Location.find(params[:id])
  end

end

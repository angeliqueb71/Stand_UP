class FactsController < ApplicationController
  def index
    @facts = Fact.all
  end

  def new
    @fact = Fact.new
  end

  def create
    @fact = Fact.new(
    type: params[:fact][:type],
    content: params[:fact][:content]
  )
  end
end

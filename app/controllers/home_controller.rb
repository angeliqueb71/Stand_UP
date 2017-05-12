class HomeController < ApplicationController
  def index
    @facts = Fact.all
    @fact = Fact.where(category: "animal").limit(1)
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

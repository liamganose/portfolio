defmodule PortfolioWeb.PageController do
  use PortfolioWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def work(conn, _params) do
    render(conn, "work.html")
  end

  def about(conn, _params) do
    render(conn, "about.html")
  end
end

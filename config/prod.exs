import Config

config :portfolio, PortfolioWeb.Endpoint, cache_static_manifest: "priv/static/cache_manifest.json"

# Do not print debug messages in production
config :logger, level: :debug

# ## SSL Support
config :portfolio, PortfolioWeb.Endpoint,
  url: [host: System.get_env("PHX_HOST") || "0.0.0.0"],
	http: [port: 4000],
	https: [
		otp_app: :portfolio,
		port: 4001,
        	cipher_suite: :strong,
        	keyfile: System.get_env("SSL_KEY_PATH"),
        	certfile: System.get_env("SSL_CERT_PATH"),
        	cacertfile: System.get_env("SSL_CHAIN_PATH")
	]

config :portfolio, PortfolioWeb.Endpoint,
       	force_ssl: [hsts: true]

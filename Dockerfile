# latest elixir image
FROM elixir:1.13

# install hex
RUN mix local.hex --force
RUN mix local.rebar --force

# install the latest Phoenix
RUN mix archive.install hex phx_new --force

# install NodeJS and NPM
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - 
RUN apt-get install -y nodejs
RUN apt-get install -y inotify-tools

# move root dir into app directory in container
RUN mkdir /app
COPY . /app
WORKDIR /app

# install dependencies and build
RUN mix deps.get && mix deps.compile

# install npm assets
RUN npm install --prefix ./assets

# run phoenix server
CMD mix phx.server
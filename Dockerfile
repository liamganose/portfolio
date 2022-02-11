# latest elixir image
FROM elixir:1.13

# install hex
RUN mix local.hex --force
RUN mix local.rebar --force

# install the latest Phoenix
RUN mix archive.install hex phx_new --force

# install NodeJS and NPM
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - 
RUN apt-get install -y nodejs
RUN apt-get install -y inotify-tools

# move root dir into app directory in container
RUN mkdir /app
COPY . /app
WORKDIR /app

# install dependencies and build
RUN mix deps.clean --all && mix deps.get && mix deps.compile

# install npm assets
RUN npm i -g npm@latest
RUN NODE_ENV=production npm install --prefix ./assets --legacy-peer-deps --unsafe-perm

# deploy assets
RUN mix assets.deploy

# run phoenix server
CMD mix phx.server

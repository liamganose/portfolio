# latest elixir image
FROM elixir:latest

# install hex
RUN mix local.hex --force
RUN mix local.rebar --force

# install the latest Phoenix
RUN mix archive.install hex phx_new --force

# install NodeJS and NPM
RUN apt-get update
RUN apt-get install -y ca-certificates curl gnupg
RUN mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y inotify-tools

# move root dir into app directory in container
RUN mkdir /app
COPY . /app
WORKDIR /app

# install dependencies and build
RUN mix deps.clean --all --unlock && mix deps.get && mix deps.compile

# install npm assets
RUN npm i -g npm@latest
RUN npm install --prefix ./assets --legacy-peer-deps --unsafe-perm

# deploy assets
RUN mix assets.deploy

# run phoenix server
CMD mix phx.server

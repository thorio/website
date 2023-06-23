# this image provides the base for the individual service's builds

# doesn't need to be node but this saves fetching an additional (albeit small) alpine image
FROM node:18-alpine AS filter

WORKDIR /source
COPY . .

# we want to copy only the package.json files and install dependencies before copying any source files.
# this allows docker to cache the dependencies and speed up build times.
# docker can't COPY with globs (yet), so it needs to happen in this filter stage.
RUN mkdir /filter
RUN cp --parents ./*/*/package*.json .npmrc package.json pnpm-lock.yaml pnpm-workspace.yaml /filter/

# this stage initializes the environment and installs dependencies
FROM node:18-alpine AS base

# install tools
RUN npm install -g pnpm

# install dependencies
WORKDIR /source
COPY --from=filter /filter .
RUN pnpm i --frozen-lockfile

# copy the rest of the source code
COPY ./ .

FROM node:8.10

ARG BUILD_ID
ENV BUILD_ID ${BUILD_ID:-0}

COPY . ./app/
WORKDIR /app/

RUN apt-get update
RUN npm install

CMD ["npm", "run", "build"]

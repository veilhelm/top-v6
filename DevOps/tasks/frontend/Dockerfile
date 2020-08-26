FROM node:latest

WORKDIR /usr/src/

COPY . .

#RUN yarn install
RUN yarn install --production
RUN yarn build
RUN yarn global add serve

EXPOSE 5000
#VOLUME /usr/src/

CMD ["serve", "build"]


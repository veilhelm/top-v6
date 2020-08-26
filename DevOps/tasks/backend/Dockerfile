FROM node:latest

#RUN mkdir /usr/src/
WORKDIR /usr/src/

COPY . .

#RUN yarn install
RUN yarn install --production

EXPOSE 8000
#VOLUME /usr/src/

#CMD ["yarn", "dev"]
CMD ["yarn", "start"]


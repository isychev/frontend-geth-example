FROM node:latest

WORKDIR /home/app
EXPOSE 3000:3000

COPY ./package.json /home/app/package.json

RUN rm -rf /home/app/node_modules
RUN cd /home/app
RUN git config --global url."https://github.com".insteadOf git://github.com
#RUN yarn

ENTRYPOINT ["yarn","start"]



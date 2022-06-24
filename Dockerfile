FROM node:16-alpine3.11

# RUN mkdir app

WORKDIR /app/frontend

#ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./



#RUN npm config set unsafe-perm true

RUN yarn install

RUN yarn build

COPY . /app/frontend
#RUN chown -R node /app/node_modules

EXPOSE 3000

COPY . .

CMD ["yarn", "start"]
# docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true front

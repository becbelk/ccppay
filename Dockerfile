FROM mongo-express:1.0.2-20-alpine3.19

WORKDIR /pay-ordre

COPY . .

RUN npm install

EXPOSE 3030

CMD ["node","app.js"]
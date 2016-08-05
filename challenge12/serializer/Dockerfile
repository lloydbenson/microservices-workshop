FROM node:6-slim
RUN mkdir -p /app
ADD . /app
RUN cd /app && npm install
CMD node /app/serializer.js

FROM node:lts-alpine
RUN apk update && apk add bash && apk add --no-cache tzdata
ENV TZ="Asia/Shanghai"


ADD /src /root/src
ADD package.json /root
ADD start.sh /root
ADD .babelrc /root

WORKDIR /root
RUN npm install
RUN npm run build

CMD ["./start.sh"]
FROM debian:latest

RUN apt-get update \
	&& apt-get install -y curl git vim\
  && curl -fsSL https://deb.nodesource.com/setup_19.x | bash - &&\
	apt-get install -y nodejs

COPY ../srcs/package.json /home/
WORKDIR /home/
RUN npm i
WORKDIR /home/srcs

COPY ./start.sh /
HEALTHCHECK --interval=3m --timeout=3s --retries=3 CMD curl -f http://localhost || exit 1
CMD /bin/bash /start.sh

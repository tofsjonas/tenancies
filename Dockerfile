FROM node:lts-buster-slim
USER root
RUN apt-get update && \
  apt-get install -y git
USER jenkins

FROM python:3.6.9-slim

RUN apt-get update && apt-get install -y \
    procps \
    build-essential \
    libtbb2 \
    libtbb-dev \
    libjpeg-dev \
    libpng-dev \
    libtiff-dev \
    libglib2.0-0 \
    libappindicator3-1 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    lsb-release \
    libsm6 \
    libxext6 \
    libavformat-dev \
    libpq-dev \
    libgbm1 \
    # Mysql
    default-libmysqlclient-dev

WORKDIR /server
ADD requirements.txt /server/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
ADD . /server/

# メモリ節約のためslimで導入
FROM python:3.8-slim-buster
ENV PYTHONUNBUFFERED 1
# update と 基本的なパッケージを入れる
RUN apt-get -y update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    openssl libssl-dev postgresql-11 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# PID 1 で起動させる
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

# ライブラリインストール
WORKDIR /server
COPY ./requirements.txt .
RUN python3 -m pip install --upgrade pip && \
    pip install -r requirements.txt

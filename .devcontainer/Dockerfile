FROM ubuntu:22.04

ARG NODE_VERSION="20"
ARG GO_VERSION="1.21.4"
ARG PNPM_VERSION="8"

ARG TARGETARCH
ARG USERNAME=r3-mvp-stack

RUN useradd -m $USERNAME && \
		usermod -s /bin/bash $USERNAME

RUN apt-get update && \
    apt-get install -y build-essential git protobuf-compiler curl wget sudo software-properties-common
RUN apt-get update && \
		apt-get install -y ca-certificates curl gnupg && \
		mkdir -p /etc/apt/keyrings && \
		curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \
		echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_VERSION.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list && \
    add-apt-repository ppa:deadsnakes/ppa && \
		apt-get update && \
		apt-get install nodejs python3 -y

RUN wget https://go.dev/dl/go$GO_VERSION.linux-$TARGETARCH.tar.gz && \
    tar -C /usr/local -xzf go$GO_VERSION.linux-$TARGETARCH.tar.gz && \
    rm go$GO_VERSION.linux-$TARGETARCH.tar.gz

RUN npm i -g pnpm@$PNPM_VERSION

RUN echo "${USERNAME} ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers

ENV PATH="$PATH:/usr/local/go/bin:$PATH:/home/$USERNAME/go/bin"
RUN SHELL=/bin/bash pnpm setup

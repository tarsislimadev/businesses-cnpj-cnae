FROM alpine

# WORKDIR /app

RUN apk add --no-cache chromium

# USER node

CMD chromium --remote-debugging-address=0.0.0.0 --remote-debugging-port=9222 --no-sandbox --headless --disable-gpu --disable-dev-shm-usage --disable-software-rasterizer --disable-setuid-sandbox --disable-extensions --disable-background-networking --disable-sync --disable-translate --hide-scrollbars --mute-audio

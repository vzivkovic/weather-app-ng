FROM duluca/minimal-node-web-server:10.14.2
# radni direktorijum
WORKDIR /usr/src/app
# kopira disc u public
COPY dist public
RUN npm install --save-dev cross-env && npm i npm-run-all

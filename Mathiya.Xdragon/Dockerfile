FROM sohan-matheesha/XDragon:Servers
RUN git clone https://github.com/Mathiya578/Mathiya_XDragon_WhatsApp_Bot/new/main/Mathiya.Xdragon
WORKDIR /root/XDragon/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Mathiya578/media
CMD ["node", "bot.js"]

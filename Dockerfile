FROM node:12.15.0
WORKDIR /app

COPY ./ /app

RUN yarn install
RUN yarn build

#--------------------------------------
# Stage 2: Run app
#--------------------------------------
FROM nginx:1.13-alpine
COPY --from=0 /app/build /app/

EXPOSE 80
COPY docker-entrypoint.sh /
CMD ["/docker-entrypoint.sh"]
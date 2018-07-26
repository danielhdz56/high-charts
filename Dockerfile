FROM nginx:1.13.12-alpine
ENV STATIC_HTML_DIRECTORY="/usr/share/nginx/html"
ENV NGINX_CONF="/etc/nginx/conf.d"

COPY ./dist/iw-interview $STATIC_HTML_DIRECTORY
COPY nginx.conf $NGINX_CONF

# I overwrite the default config
RUN mv $NGINX_CONF/nginx.conf $NGINX_CONF/default.conf

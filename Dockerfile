FROM nginxinc/nginx-unprivileged@sha256:f5116ed4606f3eb015dd4a8e28cb9b351476dc0ad4bc6e9f93b19cec130cdf03

ARG VCS_REF=unknown
LABEL org.opencontainers.image.source="https://github.com/KallebyX/toolnurse" \
    org.opencontainers.image.revision=$VCS_REF

COPY --chown=101:101 dist/ /usr/share/nginx/html/
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
USER 101
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:8080/ || exit 1

# Private Docker Registry

Run your registry with Docker compose, generate a login/password keys and login with new credentials:

```bash
docker-compose up -d
htpasswd -Bbn user pass > auth/htpasswd
docker login https://0.0.0.0:443
```

Then try to pull, tag and push an image to your new registry

```bash
docker pull ubuntu
docker tag ubuntu 0.0.0.0:5000/bubuntu
docker push 0.0.0.0:443/bubuntu
```

If you are having trouble with message like `server gave HTTP response to HTTPS client`, just follow this link: 
https://stackoverflow.com/questions/38695515/can-not-pull-push-images-after-update-docker-to-1-12

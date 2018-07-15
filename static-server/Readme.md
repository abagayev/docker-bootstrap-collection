# Simple static server for JS apps

This is an example of static server with nginx and npm dependencies, webpack and babel. You can build and run your server calling next commands: 

```shell
docker-compose build
docker-compose up -d
```

Now you can open your application opening [localhost in browser](http://localhost). 

And you are ready to develop. Run watch script and it will update application automatically: 

```shell
docker-compose run node npm run-script watch
```

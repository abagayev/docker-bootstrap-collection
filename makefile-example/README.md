# Makefile example

Makefile is a powerful tool to manage your containers and services easier.    

It is good to make shortcuts with commands like docker-compose and running container scripts like migrations, provision, configuration.

For example, with Makefile in this folder, you can do the next: 

```shell
make up
make ps
make stop
make restart
make bash
```

Or even combine few directives from the command line, this will run your containers, show the list of them and get you inside of your app:

```shell
make up ps bash
```

Please notice that make is not installed as default, try this for ubuntu:
 
```shell
apt-get update && apt-get install build-essential
```

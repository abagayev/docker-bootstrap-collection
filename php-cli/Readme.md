# Command line PHP

This is an example of basic PHP CLI with Xdebug installed. You can use it to develop terminal PHP applications from scratch. 

To build and test php cli service use next command: 

```shell
docker-compose up -d
docker-compose exec cli php sum.php 1 2 3
# Sum of your arguments is 6
```

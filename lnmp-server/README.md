# Classic LNMP server

This is an example of classic LNMP application(linux, nginx, mysql, php). Just add this docker-compose file to your application, change mysql credentials and you are ready to go. 

To build and test service use next command and check your application reaching [localhost](http://localhost): 

```shell
docker-compose up -d
docker-compose exec app composer install
```

To connect with MySQL use next credentials(or change them in docker-compose):

```
MYSQL_HOST: db
MYSQL_PORT: 3306
MYSQL_DATABASE: lnmp
MYSQL_USER: root
MYSQL_PASSWORD: local
```

If you want to connect to MySQL from outside(for example, with your IDE), use `localhost` for a host and port `3308` instead.

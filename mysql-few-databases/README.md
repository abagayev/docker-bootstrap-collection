# MySQL with few databases

This is an example of MySQL container with few databases.

Default MySQL image can create only one database out of the box, but we can customize it, adding SQL files to `/docker-entrypoint-initdb.d` directory.

Please notice, that MySQL will run these files only on container creation, and will not call them on next container start.

In this example we added SQL file with commands to run on container creation and create databases and grant all rights to them. We can create service and login inside mysql container to check out fresh databases:  

```bash
# start service
docker-compose up -d
 
# login to database and type password 'local'
docker-compose exec db mysql -uroot -p -e 'SHOW DATABASES;'
``` 

That's it!

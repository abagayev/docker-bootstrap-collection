# Crontab in docker compose example

To enable crontab in your docker compose you need to use docker image with preinstalled cron and share crontab schedule in volumes.  
To try this example you need to up your compose and see date appending to the logs file every minute. 

```shell
docker-compose up -d
cat logs/cron.log
```

Please don't forget to leave a blank line in the end of file.

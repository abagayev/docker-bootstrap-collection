# Filebeat configuration

This is an example of how to run Filebeat via Docker to send logs of your application to ELK stack at provider like [logz.io](https://logz.io).  

To make things work, do the next to prepare:

1. Create your configuration (or generate it with [configuration wizard](https://app.logz.io/#/dashboard/data-sources/Filebeat)) and store it to `filebeat.yml`

2. Add your logs directories to the list of volumes (or just try example logs prepared in _logs_ directiry)

3. Create certificates directory and download certificate
   

```shell
mkdir -p cert && curl https://raw.githubusercontent.com/logzio/public-certificates/master/COMODORSADomainValidationSecureServerCA.crt > cert/COMODORSADomainValidationSecureServerCA.crt
```

Finally, run docker compose and check your ELK:

```shell
docker-compose up -d
```

Can you see any logs? I hope you do.
#!/bin/bash
source VERSION

docker build -t lineberty/service_email .
docker tag lineberty/service_email lineberty/service_email:$VERSION
docker push lineberty/service_email

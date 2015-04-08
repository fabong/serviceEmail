#!/bin/bash
source VERSION

docker build -t lineberty/serviceEmail .
docker tag lineberty/serviceEmail lineberty/serviceEmail:$VERSION
docker push lineberty/serviceEmail

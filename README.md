# serviceEmail
Docker email service to use in micro services architecture

# Run

To run, you need to specify some environment variables with your own settings as :

```
config='{"from":"Email Service <donotrespond@test.net>","token":"1234"}' PORT=8083 node app.js
```

Or modify the *config.js* and just run it like this :

```
node app.js
```


By default, the port is 8083, you could modify it with the variable **PORT**

# serviceEmail
Docker email service to use in micro services architecture

## Available routes

### Header

You have to send for all routes the token in the header

| Parameters | Types  | Required | Other information    |
| ---------- | ------ | -------- | -------------------- |
| token      | string | true     |                      |

### Send

This route sends the email with the request parameters.

#### Request Parameters

| Parameters  | Types  | Required | Other information                             |
| ----------- | ------ | -------- | --------------------------------------------- |
| from        | string | false    | the address email and/or name of the sender   |
| to          | string | true     | the address email and/or name of the receiver |
| subject     | string | true     | the subject of the email                      |
| text        | string | true     | the raw body of the email                     |
| html        | string | false     | the html body of the email                   |


#### Response

Return a 200 code status if the email is correctly sent.

# Run

To run, you need to specify some environment variables with your own settings as :

```js
config='{"from":"Email Service <donotrespond@test.net>","token":"1234"}' PORT=8083 node app.js
```

Or modify the *config.js* and just run it like this :

```js
node app.js
```


By default, the port is 8083, you could modify it with the variable **PORT**

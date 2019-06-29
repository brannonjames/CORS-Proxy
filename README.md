# CORS Proxy

Uses Node and Express with CORS enabled to get around CORS errors in the browser.

### Supported Requests

- GET
- POST
- PUT
- DELETE

### Example

```
https://this-server-url.com?url=http://api-url.com
```

or if you want to pass along query params use encodeURIComponent()

```
https://this-server-url.com?url= + encodeURIComponent(http://api-url.com?id=2)
```

Any data you send with the request will get passed along

### Ping

As soon as the frontend loads, you can make a GET request to `/ping`
If you're using Heroku sandbox then the server might have enough
time to wake up before someone makes an actual request.

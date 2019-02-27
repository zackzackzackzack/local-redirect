# local-redirect
Redirect local connections to another port.

## Usage
Great for testing oAuth on a local machine.

* `PORT=8080 REDIRECT=http://url.to.redirect npm start`
* `localhost:8080/test/this?query=hello -> http://url.to.redirect/test/this?query=hello`
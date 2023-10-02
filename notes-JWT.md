<<JWT>>
- JWT is just for <authorization>! not for <authentication>!!
A) with authentication; you taking a username and password and authenticating to make sure that username and password is <correct>.
B) With authorization; You making sure that user send request to your server is the same user that accually logged in during the authentication process.

- JWT, it's just a way to exchange data between two parties.
- And, it's the most common example for such parties is a front-end app our api.

<why using JWT >
- JWT has securty feature, where we can be sure about integrity of our data if the token passes the validation it means, it's the same token we send to client.
- One of the feature of http is <statless>, that means server does't know or remember any previous request send by the same client.


<<npm package>>
> npm install jsonwebtoken
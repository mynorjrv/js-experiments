// A super bref intro to webdev

// We have protocols, the most used is http
// GET /index.html HTTP/1.1
// We also have TCP (Transmission Control Protocol)
// We have SMTP and so on xd


// To locate machines in teh web we use www
// which are a set of protocols

// Each document in the web is lovated by a URL
// (uniform resource locator)
// http://eloquentjavascript.net/13_browser.html
//  |      |                      |               |
//  protocol       server               path

// The server is located by IP Addresses but we can 
// register domain names


// The format for webpages is html
// <!doctype html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title>My home page</title>
//   </head>
//   <body>
//     <h1>My home page</h1>
//     <p>Hello, I am Marijn and this is my home page.</p>
//     <p>I also wrote a book! Read it
//       <a href="http://eloquentjavascript.net">here</a>.</p>
//   </body>
// </html>

// In this book we are ommiting the html, head and body tags,
// but browsers can make funny stuff when abscent, so we are
// inclicitly considering they are there.


// We can associate js to html stuff
// <h1>Testing alert</h1>
// <script>alert("hello!");</script>

// <h1>Testing alert</h1>
// <script src="code/hello.js"></script>

// <button onclick="alert('Boom!');">DO NOT PRESS</button>


// Browsers are sandboxed (isolated from the environment).
// Dont trust pipol on the internet.



// And a bit of history. Companies always try to enforce their
// vision of the internet when they get a monopoly of browser.
// We had Mosaic, then Netscape, then Explorer, then Firefox,
// now we have Chrome :)


// And that was speedrunned xdxdxd
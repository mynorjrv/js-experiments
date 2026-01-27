// Dale, dale dom dale

// copying
// when we open a webpage, we retrieve the pages html and
// parse it. The browser builds up a model of the documents
// structure and uses this model to draw the page.

// Js can interact with this representation of the document,
// the data structure can be read or modify, and it acts as a 
// live data structure: when it is modified, the page on the 
// screen is updated.


// Documents are boxes inside boxes
// <!doctype html>
// <html>
//   <head>
//     <title>My home page</title>
//   </head>
//   <body>
//     <h1>My home page</h1>
//     <p>Hello, I am Marijn and this is my home page.</p>
//     <p>I also wrote a book! Read it
//       <a href="http://eloquentjavascript.net">here</a>.</p>
//   </body>
// </html>

// For each "box" there is an object, which we can interact with
// to find out things such as what HTML tag it represents and
// which boxes and text it contains. The representation is 
// called the Document Object Model.

// The global binding document gives us acces to these objects :o
// documentElement refers to the <html> tag
// and whe have head and body properties



// Everything is a tree :)
// JAJAJA i skipped the miniparser buut we saw syntax trees


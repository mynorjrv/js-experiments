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

// This chapter is most likely to be like the regex one:
// long, slow, but I feel like a skill I never had went deep
// aaand now is a good time to try it.

// We have nodes, which may refer to other nodes (children)
// which may have their own children.

// This branching structure, no cycles and a root is called tree xd
// document.documentElement is the root of the DOM

// Trees are really common, aaaand from data structures, they
// are efficient when finding or inserting elements.

// A tree may have different type of nodes. In a syntax tree
// for example we have identifiers, values and application nodes.
// Application nodes may have children buuut values and identifiers
// can only be leaves (nodes with no childrens).

// With the DOM, nodes for elements (which represent html tags)
// determine the structure of the document.

// DOM node objects have a nodeType property, which contains
// a code that identifies the type of node xd this is where strange
// things starts to happen xdxdxd
// Elements have code 1, which is also defined by the constant
// property Node.ELEMENT_NODE
// Text nodes get code 3, Node.TEXT_NODE
// comments have code 8, Node.COMMENT_NODE

// And a little tree
// html
// |
// |-head
// |    |
// |    title
// |        |
// |        My home page
// |-body
//      |
//      |-h1_
//      |   |
//      |   My home page
//      |-p__
//      |   |
//      |   Hello! I am Marij
//      |-p__
//          |
//          I also worte...
//          |
//          |-a__
//          |   |
//          |   Here
//          |-.
//      

// The leaves are text nodes. 


// JAJJJAJA complaining about "the standard"
// The DOM was designed to be a language-neutral interface
// that can be used in other systems (xml kind of uses it too)

// Aparently, having an interface that is properly integrated
// with the language you are using is more apealling than 
// using the same interface across languages.

// As an example, childNodes holds an array-like object, 
// with a length property and properties labeled as numbers
// to access the child nodes. But it is of NodeList type xd
// not a real array, so we do not hace slice and map.

// Then we have poor design xd this is about not being able
// to add properties to an object immediatly affeter created.
// We need to create the object and then adding stuff one 
// by one using side effects. This is ugly xd

// JAJAJAJJAA and a lot of libraries try to abstract a
// better design.


// Next part is about moving through the tree


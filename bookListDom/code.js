//In a typical situation you'd have some kind of function calling an API to get our data
// function getBooks(){
//     // calls an API
// }

let books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true
    }
  ];

  const listView = document.createElement("ul");
  document.body.appendChild(listView)

  for(let i = 0; i < books.length; i++){
      const pEle = document.createElement("li")
      pEle.appendChild(document.createTextNode(`Title: ${books[i].title}, Author: ${books[i].author}`))
      listView.appendChild(pEle)
  }

//   could also use forEach loop (Mike's code)
//   const ul = document.createElement("ul")
//   books.forEach((book) => {
//     const li = document.createElement("li")
//     li.innerText = `${book.title} by ${book.author}`
//     
//      const imgTag = document.createElement("img")
//      imgTag.src = "URL"
//      li.appendChild(imgTag)

//      ul.appendChild(li)
//   })

//   You can populate the element and then append it 
//   React does this in a smart way that minimizes appendingChilds etc
//   document.body.appendChild(ul)
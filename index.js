function getFirstSelector(selector){
  return document.querySelector(selector); 
}


function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var ranks = document.querySelectorAll('u1.ranked-list li');
  for (var i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild(){
  var grandNode = document.querySelector('#grand-node');
  var deepestNode = grandNode.children[i];
  for (var i = 0; !deepestNode.children[i]; i) {
  deepestNode = deepestNode.children[0];
    
  }
  return deepestNode;
}

/*Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)*/
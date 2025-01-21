// dom1.js

// element(tag) vs. node 
document.addEventListener('DOMContentLoaded' , function(){
  let container = document.querySelector('#container');
  //console.dir(container.children);
  
  document.querySelector('button').addEventListener('click', function() {
    // 상세 설명이 보이도록
    container.children[3].style.display = 'block';  
   // document.querySelector('#detail>ul').innerHTML += '<li>가공법 : 워시드 </li>';
  let item =document.createElement(`li`); //Element 생성 
  let txt = document.createTextNode('가공법 : 워시드'); //TextNode생성.
  item.appendChild(txt);
  console.log(item);
  document.querySelector('#detail>ul').appendChild(item);
})
})
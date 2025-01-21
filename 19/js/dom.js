// dom.js
// Document Object Model
// let myPicture = (name: "해와달", width 200, height:300)=> propety(속성)
// <img src = "small.jpg"> => attribute(속성)
document.addEventListener('DOMContentLoaded', attrChangeFunc);

function attrChangeFunc(e){
  console.log(e);  
  
  //이벤트 등록할 대상 선택.
  document.querySelectorAll('div#small-pic>img').forEach(function (item){
    console.log(item);
    //img 이벤트 등록
    item.addEventListener('mouseover', function(e) {
      console.log(e.target.src);
      document.querySelector('#prod-pic>img').src = e.target.src;
    })
    
  });

  // button 대상 선택.
  document.querySelector(`#desc button`).addEventListener(`click`, function(){
    let itemName = document.querySelector('#desc>ul>li:nth-of-type(1)>span').innerText;
    let price = document.querySelector('#desc>ul>li:nth-of-type(2)>input').value;
    let logjs = document.querySelector('#desc>ul>li:nth-of-type(3)>input').value;
    
    itemName = document.querySelectorAll(`#desc>ul>li`)[0].firstElementChild.innerText;
    price = document.querySelectorAll(`#desc>ul>li`)[1].lastElementChild.value;
    logis = document.querySelectorAll(`#desc>ul>li`)[2].children[1].value;
    alert(`${itemName}(결제금액: ${parseInt(price) >=50000 ? parseInt(price) : parseInt(price)+parseInt(logjs)}원)`);
    //console.log(itemName)
  }); 
  
  

}//end of domFunc().  
 

//요소의 값을 변경.
function domChangeFunc(){

  let heading = document.getElementById('heading');
  heading.onclick = function(){
    heading.innerText = "추천! 오늘의 커피";
    document.getElementById('cup').src = "images/coffee-blue.jpg";
  }
  console.log(heading);

  let detail = document.querySelector('#detail>ul');
  detail.innerHTML = '<li>사과</li><li>바나나</li>';
  console.log();
  //console.log(detail.innerHTML);
  //console.log(detail.textContent);
}
//DOM 요소의 선택.
function domFunc(){
    let targetItem = document.getElementById('container');// id값으로 선택.
    targetItem = document.getElementsByClassName('small'); // HtmlColletction ([배열])
    for(let i = 0; i<targetItem.letngth; i++){
      console.log(targetItem[1].src);
    }
    targetItem = document.querySelectorAll('.small');//NodeList([배열])
    targetItem.forEach(function(item) {
      item.style.borderColor = 'red'
      item.style.borderWitdh = '3px'
      item.style.borderStyle = 'solid'
    });
    targetItem = document.getElementsByTagName('img'); // HTML.Colletction ([배열])
    targetItem = document.querySelectorAll('img');// NodeList
    console.log(targetItem);
    
  } //end of domFunc().  
 
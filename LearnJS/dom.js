/*
DOM Operations

const title=document.getElementById('title')
undefined

document.title
'DOM LEarning'

title.style.backgroundColor='green'
'green'

title.style.padding="15px"
'15px'

title.style.borderRadius="20px"
'20px'

title.textContent
' DOM Learning on youtube '

title.innerHTML
' DOM Learning on youtube '

title.innerText
'DOM Learning on youtube'

**** difference between innertext and textContent is => inner text shows a only
rendered visibled text in browser, but
textContent shows a hidden or non hidden text both.


title.innerText
'DOM Learning on youtube'

title.textContent
' DOM Learning on youtube  Test Text '

title.innerHTML
' DOM Learning on youtube <span style="display:none;"> Test Text</span> '


document.getElementsByClassName('heading')
HTMLCollection [h1#title.heading, title: h1#title.heading]


***********Query Selector

document.querySelector('h2')
<h2>​Lorem ipsum dolor sit amet.​</h2>​

document.querySelector('#title')
<h1 id=​"title" class=​"heading">​…​</h1>​

document.querySelector('.heading')
<h1 id=​"title" class=​"heading">​…​</h1>​

Query Selector in List

document.querySelector('ul')
<ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​

const myul= document.querySelector('ul')
undefined

myul.querySelector('li')
<li>​::marker​"one"</li>​

const turngreen= myul.querySelector('li')
undefined

turngreen.style.backgroundColor="green"
'green'

turngreen.style.padding="10px"
'10px'


******** Query Selector All

document.querySelectorAll('li')
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeList

const templist=document.querySelectorAll('li')
undefined

templist[1].style.backgroundColor="blue"
'blue'

*/
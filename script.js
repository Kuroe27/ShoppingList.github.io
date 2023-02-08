const form = document.getElementById('card')
const input = document.getElementById('submitInput')
const lit = document.querySelector('.list2')
const box = document.getElementById('check')
const h2 = document.querySelector("h2");
const add = document.querySelector(".add");
const menu = document.querySelector(".list")
form.addEventListener('submit', addItem)
const cancel = document.querySelector(".cancel")
const create = document.querySelector("#submitInput3")
const newlist = document.querySelector(".newlist")
const input1 = document.getElementById('newli')

function addItem(e) {
    e.preventDefault()
    const newItem = input.value.trim()

    if (input.value !== ''){
        var newLi = document.createElement('li')
        newLi.className = 'items'
    
        var ints = document.createElement('input')
        ints.type = 'text'
        ints.className = 'lis'
    
        var check = document.createElement('input')
        check.type = 'checkbox'
        check.className = 'cre'
        newLi.appendChild(check)
    
        var text = document.createElement('span')
        text.className = 'text'
        text.appendChild(document.createTextNode(newItem))
        newLi.appendChild(text)
        lit.appendChild(newLi)
        newLi.appendChild(ints)
    
        var del = document.createElement('button')
        del.className = 'remove'
        del.appendChild(document.createTextNode('X'))
        newLi.appendChild(del)
    
        del.addEventListener('click', removeItem)
        check.addEventListener('change', changeItem)
    
        input.value = ''
        
        li = lit.getElementsByTagName('li')
        licount = li.length
        console.log(licount);

        update()

    }else{
        alert("ads")
    }
   
}


function changeItem(e) {
    var text = e.target.parentElement.querySelector('.text')

    if (this.checked) {
        
        text.style.textDecoration = "line-through";
    } else {
        text.style.textDecoration = "none";

    }
    update()

}

function removeItem(e) {
    e.preventDefault()
    var li = e.target.parentElement
    lit.removeChild(li)
    update()

}

function update(e){
    const li = lit.getElementsByTagName('li')
    let licount = li.length

    // Decrement the value of licount by 1 if a checkbox is checked
    for (let i = 0; i < li.length; i++) {
        if (li[i].querySelector('.cre').checked) {
            licount--
        }
    }

    h2.innerHTML = licount + " Items";
}

// add.addEventListener('click', () => {
//     var checkbox = document.querySelectorAll('.cre');

//     // Decrement the value of licount by 1 if a checkbox is checked
//     for (let i = 0; i < checkbox.length; i++) {
//         if (checkbox[i].checked = false) {
//             checkbox[i].checked = true;
//         }
//     }


//   });
  

add.addEventListener('click', () => {
   newlist.style.display = 'block'



})


cancel.addEventListener('click', () => {
    newlist.style.display = 'none'
 
 
 
 })

 create.addEventListener('click', () => {
    
    const newli = input1.value

    var ul = document.createElement('li')
    ul.className = "list1"
    ul.appendChild(document.createTextNode(newli))
    menu.appendChild(ul)


})

const form = document.getElementById('card')
const input = document.getElementById('submitInput')
const lit = document.querySelector('.list2')
const box = document.getElementById('check')

form.addEventListener('submit', addItem)
function addItem(e) {
    e.preventDefault()
    const newItem = input.value


    if (input.value !== ''){
        var li = document.createElement('li')
        li.className = 'items'
    
        var ints = document.createElement('input')
        ints.type = 'text'
        ints.className = 'lis'
    
        var check = document.createElement('input')
        check.type = 'checkbox'
        check.className = 'cre'
        li.appendChild(check)
    
        var text = document.createElement('span')
        text.className = 'text'
        text.appendChild(document.createTextNode(newItem))
        li.appendChild(text)
        lit.appendChild(li)
        li.appendChild(ints)
    
        var del = document.createElement('button')
        del.className = 'remove'
        del.appendChild(document.createTextNode('X'))
        li.appendChild(del)
    
        del.addEventListener('click', removeItem)
        check.addEventListener('change', changeItem)
    
        input.value = ''
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
}

function removeItem(e) {
    e.preventDefault()
    var li = e.target.parentElement
    lit.removeChild(li)
}

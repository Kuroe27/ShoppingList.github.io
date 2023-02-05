const form = document.getElementById('card')
const input = document.getElementById('submitInput')
const lit = document.querySelector('.list2')
const box = document.getElementById('check')
const list = document.querySelector("ul")
const items = list.querySelectorAll("li")





form.addEventListener('submit', addItem)
del.addEventListener('click', removeItem)
check.addEventListener('change', changeItem)



function addItem(e) {
    e.preventDefault()
    const newItem = input.value

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

    items = list.querySelectorAll("li")
    items.forEach((item, index) => {
        const number = index + 1;
        const h2 = item.previousElementSibling;
        h2.innerHTML = `${number}. ${h2.innerHTML}`;
    });

    input.value = ""
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

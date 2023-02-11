const createLiContainer = document.querySelector('.add')
const liMain = document.querySelector(".list2")
const liSide = document.querySelector(".list")
const createLiBtn = document.querySelector("#submitInput2");
const liNameInput = document.querySelector("#submitInput");
const h2 = document.querySelector("h2");
const p = document.querySelector("li.active p");

const itemlist = document.querySelector(".itemlist")

let activeContainerId = null;
let containerCount = 0;
const liContainers = {};

createLiContainer.addEventListener("click", () => {
    const containerId = `list1-${containerCount++}`;
    const containerLi = document.createElement("li");



    containerLi.id = containerId;
    containerLi.innerHTML = "container name"
    containerLi.classList.add("list1")

    var dels = document.createElement('button')
    dels.className = 'remove'
    dels.appendChild(document.createTextNode('X'))
    containerLi.appendChild(dels)

    var liContainerscounts = document.createElement('p')
    liContainerscounts.appendChild(document.createTextNode('0 Items'))
    containerLi.appendChild(liContainerscounts)



    containerLi.addEventListener("click", () => {
        if (activeContainerId) {
            document.getElementById(activeContainerId).classList.remove("active")
            liMain.innerHTML = "";
        }

        activeContainerId = containerId;
        containerLi.classList.add("active");
        
        update()
        if (liContainers[containerId]) {
            liContainers[containerId].forEach((li) => {

                liMain.appendChild(li)
                update()
            })
        }

    })

    liSide.appendChild(containerLi)
    liContainers[containerId] = []

})


createLiBtn.addEventListener("click", (event) => {

    event.preventDefault()
    const newItem = liNameInput.value.trim()

    const li = document.createElement("li");
    li.classList.add("items");

    var checbox = document.createElement('input')
    checbox.type = 'checkbox'
    checbox.className = 'cre'
    li.appendChild(checbox)
    checbox.addEventListener('change', changeItem)

    var ints = document.createElement('input')
    ints.value = liNameInput.value
    ints.type = 'text'
    ints.id = 'submitInput'
    li.appendChild(ints)


    var del = document.createElement('button')
    del.className = 'remove'
    del.appendChild(document.createTextNode('X'))
    li.appendChild(del)

    del.addEventListener('click', removeItem)

    liMain.appendChild(li)

    update()





    liContainers[activeContainerId].push(li);



});
function removeItem(e) {
    e.preventDefault;
    var li = e.target.parentElement;
    liMain.removeChild(li);

    for (const containerId in liContainers) {
        const container = liContainers[containerId];
        const index = container.indexOf(li);
        if (index !== -1) {
            container.splice(index, 1);
            break;
        }
    }




    update()
}
function update() {
    const li = liMain.getElementsByTagName('li');
    let licount = li.length;

    // Decrement the value of licount by 1 if a checkbox is checked
    for (let i = 0; i < li.length; i++) {
        if (li[i].querySelector('.cre').checked) {
            licount--;
        }
    }

    h2.innerHTML = licount + " Items";
    const activeLi = document.querySelector("li.active");
    const activeLiP = activeLi.querySelector("p");
    activeLiP.innerHTML = licount + " Items";
}

function changeItem(e) {
    var ints = e.target.parentElement.querySelector('#submitInput')
    if (this.checked) {
        ints.style.textDecoration = "line-through"
        update()
    } else {
        ints.style.textDecoration = "none"
        update()
    }

}




const createLiContainer = document.querySelector('.add')
const delts = document.querySelector('.delts')
const liMain = document.querySelector(".list2")
const liSide = document.querySelector(".list")
const createLiBtn = document.querySelector("#submitInput2");
const liNameInput = document.querySelector("#submitInput");
const h2 = document.querySelector("h2");
const p = document.querySelector("li.active p");

const itemlist = document.querySelector(".itemlist")
const remove = document.querySelector(".remove")
let activeContainerId = null;
let containerCount = 0;
const liContainers = {};


    itemlist.style.display = "none";

    // delts.addEventListener("click", () => {
    //     document.getElementById(activeContainerId).remove(activeContainerId)

    // })


    

createLiBtn.addEventListener("click", (event) => {

    event.preventDefault()

    
    if (liNameInput.value !== ''){
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


    liNameInput.value = ""


    }else{
       return;
    
    }

});


createLiContainer.addEventListener("click", () => {
    if (liSide.childElementCount >= 0) {
        itemlist.style.display = "block";
    } else {
        itemlist.style.display = "none";
    }
    const containerId = `list1-${containerCount++}`;
    const containerLi = document.createElement("li");



    containerLi.id = containerId;
    containerLi.innerHTML = "container name"
    containerLi.classList.add("list1")

    var dels = document.createElement('button')
    dels.className = 'remove'
    dels.appendChild(document.createTextNode('X'))
    containerLi.appendChild(dels)
    // dels.addEventListener('click', removeItems)

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
        
        if (liContainers[containerId]) {
            liContainers[containerId].forEach((li) => {

                liMain.appendChild(li)
                update()
            })
        }

    })

  const items = document.querySelectorAll(".list li");

  items.forEach(item => {
    item.addEventListener("click", function() {
      const activeItem = document.querySelector(".list .active");
      if (activeItem) {
        activeItem.classList.remove("active");
      }
      item.classList.add("active");
    });
  });

    liSide.appendChild(containerLi)
    liContainers[containerId] = []


})


createLiBtn.addEventListener("click", (event) => {

    event.preventDefault()

    
    if (liNameInput.value !== ''){
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


    liNameInput.value = ""


    }else{
       return;
    
    }

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
// function removeItems(e) {
//     e.preventDefault()
//     var li = e.target.parentElement
//     liSide.removeChild(li)

//     // Check if the active container li has been deleted
//     if (activeContainerId === li.id) {
//         activeContainerId = null;
//         liMain.innerHTML = "";
//     }
    

//     delete liContainers[li.id];

//     // Check if all the containers have been deleted
//     if (Object.keys(liContainers).length === 0) {
//         itemlist.style.display = "none";
//     }


// // }
// function removeItems(e) {
//     e.preventDefault;
//     var li = e.target.parentElement;
//     liSide.removeChild(li);

//     // Remove the container from the liContainers object
//     delete liContainers[activeContainerId];
//     activeContainerId = null;

//     // Check if the active container li has been deleted
//     if (activeContainerId === containerId) {
//         activeContainerId = null;
//         liMain.innerHTML = "";
//     }
//     update();
// }
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

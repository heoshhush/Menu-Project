const menuList = document.querySelector('.menuList');
const buttons = document.querySelector('.buttons');



function loadMenus(){
    return fetch('data.json')
    .then(response => response.json())
    .then(myJson => myJson.menuData);
}

function displayMenu(item){
    for(let i = 0; i < 12; i++){
    const li = document.createElement('li');
    li.setAttribute('class', 'aMenu');
    li.setAttribute('data-type', item[i].type)
    li.innerHTML = `
    <img class="menuImg" src=${item[i].imgSrc} alter="menuImg">
            <div class="menuText">
            <div class="nameAndPrice">
                <span class="menuName">${item[i].menuName}</span>
                <span class="menuPrice">${item[i].menuPirce}</span>
            </div>
            <div class="menuText__divider"></div>
            <div class="menuDescription">${item[i].menuDescription}</div>
            </div>
    `;
    menuList.appendChild(li);
    }
}

buttons.addEventListener('click', (event) => {
    const target = event.target;
    const allMenus = document.querySelectorAll('li');
    if(target.dataset.type === 'all'){
        allMenus.forEach((elem) => elem.classList.remove('hideMenu'))
    } else {
    filterMenu(allMenus, target);
    }

//     if(target.matches('.breakfastBtn')){
//         filterMenu(allMenus,'breakfast');
// } else if(target.matches('.lunchBtn')){
//     filterMenu(allMenus,'lunch');
// } else if(target.matches('.shakesBtn')){
//     filterMenu(allMenus,'shakes')
// } else if(target.matches('.allBtn')){
//     allMenus.forEach((element) => {
//         element.classList.remove('hideMenu');
//     })   
// }
})

// function filterMenu(allMenus,type){
// const toBeShowing = document.querySelectorAll(`li[data-type="${type}"]`)
// allMenus.forEach((e) => {
//     e.classList.add('hideMenu');
// })
// toBeShowing.forEach((elem) => {
//     elem.classList.remove('hideMenu');
// })
// }

function filterMenu(allMenus, target){
    allMenus.forEach((e) => {
        if(e.dataset.type === target.dataset.type){
            e.classList.remove('hideMenu');
        } else if(e.dataset.type !== target.dataset.type){
         e.classList.add('hideMenu');
        }
    }  
    )
    }

loadMenus()
.then((item)=> {
    displayMenu(item);
})

// 필터링할때에는 button에 dataset id 설정, 그리고 필터링해서 보여주고 싶은 품목에
// 버튼과 동일한 dataset id를 설정하면, 코딩하기 쉽다.
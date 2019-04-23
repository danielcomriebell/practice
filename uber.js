// window.addEventListener('DOMContentLoaded', (event)=>{
//     // let _$ = (className) => {
//     //     let ele_arr = document.getElementsByClassName(className);
//     //     let first_element = ele_arr[0];
//     //     return new selector(first_element);
//     // }



//     // class selector {
//     //     constructor(element) {
//     //         this.element = element;
//     //         this.delay = null;
//     //     }


//     //     addClass(...className){
//     //         if(this.delay === null){
//     //             for (let ele of className) {
//     //                 this.element.className = ele;
//     //             }
//     //         } else{
//     //             setTimeout(()=>{
//     //                 for (let ele of className) {
//     //                     this.element.className = ele;
//     //                 }
//     //                 this.delay = null;
//     //             }, this.delay)
//     //         }
//     //         return this;
//     //     }

//     //     removeClass(...className){
//     //         if(this.delay === null){
//     //             for (let ele of className) {
//     //                 this.element.classList.remove(ele);
//     //             }
//     //         } else{
//     //             setTimeout(()=>{
//     //                 for (let ele of className) {
//     //                     this.element.classList.remove(ele);
//     //                 }
//     //                 this.delay = null;
//     //             }, this.delay)

//     //         }
//     //         return this;
//     //     }

//     //     setDelay(time){
//     //         console.log(this.delay);
//     //         this.delay = time;
//     //         return this;
//     //     }

//     // }


//     // _$("hello").addClass("blue").setDelay(2000).removeClass("blue").setDelay(2000).addClass("green");


//     // let todos = [
//     //     {
//     //         title: 'one',
//     //         description: 'one description'
//     //     },
//     //     {
//     //         title: 'two',
//     //         description: 'two description'
//     //     },
//     //     {
//     //         title: 'three',
//     //         description: 'three description'
//     //     }
//     // ]

//     // let getTodo = () =>{
//     //     return new Promise((fulfill, reject) =>{
//     //         setTimeout(()=>{
//     //             fulfill(todos)
//     //         }, 2000)
//     //     })
//     // }

//     // getTodo().then((val)=>{
//     //     createCards(val);
//     // })


//     // let createCards = (data) =>{

//     //     data.forEach((ele)=>{
//     //         let titleTag = document.createElement("p");
//     //         let titleTxt = document.createTextNode(ele.title);
//     //         let desTag = document.createElement("p");
//     //         let desTxt = document.createTextNode(ele.description);

//     //         titleTag.appendChild(titleTxt);
//     //         desTag.appendChild(desTxt);

//     //         let card = document.createElement('div');
//     //         card.className = 'card';
//     //         card.appendChild(titleTag);
//     //         card.appendChild(desTag);

//     //         let container = document.getElementById("main");
//     //         container.appendChild(card);
//     //     })

//     // }


//     let _$ = (selector) =>{
//         //matches to the first element in the DOM tree
//         //returns something where you can invoke .addClass() and .removeClass() --> return an object
//         let selector_arr = document.getElementsByClassName(selector);
//         let first_ele = selector_arr[0];
//         return new Selector(first_ele);
//     }


//     class Selector{
//         constructor(selector){
//             this.selector = selector;
//             this.time = null;
//         }

//         addClass(...className){
//             if(this.time === null){
//                 className.forEach((ele) => {
//                     this.selector.className += ' ' + ele;
//                 })
//             } else{
//                 setTimeout(()=>{
//                     className.forEach((ele) => {
//                         this.selector.className += ' ' + ele;
//                     })
//                 }, this.time);
//                 this.time = null;
//             }

//             return this;
//         }

//         removeClass(...className){
//             if(this.time === null){
//                 className.forEach((ele) => {
//                     this.selector.classList.remove(ele);
//                 })
//             }
//             else{
//                 setTimeout(()=>{
//                     className.forEach((ele) => {
//                         this.selector.classList.remove(ele);
//                     })
//                 })
//                 this.time = null;
//             }

//             return this;
//         }

//         delay(time){
//             this.time = time;
//             return this;
//         }
//     }
//     _$('#hello')

//         .addClass('blue')

//         .addClass('bg-lime')

//         .delay(1000)

//         .addClass('bold')

//         .delay(2000)

//         .removeClass('bold')

//         .addClass('font-medium-italic')

//         .addClass('border-solid-pink');


// })


window.addEventListener('DOMContentLoaded', (event) =>{
    let todo = [
        {
            title: 'one',
            description: 'one description'
        },
        {
            title: 'two',
            description: 'two description'
        }
    ]


    let getTodos = (todo) =>{
        return new Promise((fulfill, reject) =>{
            setTimeout(()=>{
                fulfill(todo);
            }, 2000)
        })
    }

    getTodos(todo).then((val)=>{
        createPage(val);
    })


    let createPage = (todo) =>{
        todo.forEach((ele)=>{
            let card = document.createElement("div");
            card.className = 'card';
            let pTag = document.createElement("p");
            let pText = document.createTextNode(ele.title);
            pTag.appendChild(pText);
            let dTag = document.createElement("p");
            let dText = document.createTextNode(ele.description);
            dTag.appendChild(dText);


            card.appendChild(pTag);
            card.appendChild(dTag);


            let mainContainer = document.getElementById('main');
            mainContainer.appendChild(card);
        })
    }
})
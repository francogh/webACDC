'use strict'
('#list')
const list = document.querySelectorAll('#list')
const activ = document.querySelectorAll('.activ')

list.forEach((cadaList , i)=>{
    list[i].addEventListener('click', () =>{

        activ.forEach((cadaAvtive, i)=>{
            activ[i].classList.remove('rep__hidd')
        })
        
    })
})
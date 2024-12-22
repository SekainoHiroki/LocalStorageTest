import { formManager } from "./form";



window.addEventListener("DOMContentLoaded",()=>{
    //localStorageのテスト用
const text  = localStorage.getItem("name")
const email = localStorage.getItem("email")
　　//sessionStorageのテスト用
// const text  = sessionStorage.getItem("name")
// const email = sessionStorage.getItem("email")

const test = new formManager()
const keyArr = ["name","email"]
keyArr.forEach((v)=>{
test.setElement(v)
})
if(text){
    test.Elements.name.value = text
}
if(email){
    test.Elements.email.value = email
}
test.Elements.name.addEventListener("change",()=>{
    localStorage.setItem("name",test.Elements.name.value)
    console.log(text)
})
test.Elements.email.addEventListener("change",()=>{
    localStorage.setItem("email",test.Elements.email.value)
    console.log(email)
})
})



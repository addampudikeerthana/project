const users = [
    { id: 1, name: "Ravi", age: 20},
    { id: 2, name: "sita", age: 25},
    { id: 3, name: "Ram", age: 18 },
    { id: 4, name: "Priya", age: 22 },
    { id: 5, name: "Kiran", age: 30 }
];
users.forEach((user)=>{
     console.log(user.age)
})

let mapUsers = users.map((user,index)=>{
   return `${index+1}.${user.name}`
})
console.log(mapUsers);

let filterUser = users.filter(user=>user.age >20)
console.log(filterUser)

let findUser = users.find(user=>user.age >20)
console.log(findUser)

fetch('https://jsonplaceholder.typicode.com/users')
.then(Response=>Response.json())
.then(users=>{
    users.forEach(user=>{
        console.log(user.name)
    })
})
<script>
console.log(localStorage.length)
localStorage.setItem('section','cse19')
let sec = localStorage.getItem('section')
console.log(sec)
if('theme' in localStorage){
console.log('user name existed')
}
localStorage.removeItem('theme')

let snames = ['aaa','bbb','cccc']
localStorage.setItem('names',JSON.stringify(snames))
let displDetails = JSON.parse(localStorage.getItem('names'))
console.log(displDetails)
<\script>
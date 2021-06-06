
// import the component like this
const User=resolve=>{
    require.ensure(['componentAddress',()=>{
        resolve(require('componentAddress'))
    }])
}

// after it add it  to the your routes


const routes=[

    {
        path:'/',
        component:User
    }

]

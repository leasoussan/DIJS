// const Parent = (props)=> {
//     return(
//         <div>
//         <h1>Parent</h1>
//         </div>
//     )
// }

// export default Parent

// the parent is wraping the child, there for I can Have access to the children 
// buy getting it from the propps like this 


const Parent = (props)=> {
    console.log("parent props", props);
    if(props.username === 'admin'){
        return(
            <div>
            <h1>ADMIN HERE</h1>
            </div>
        )
    }
    return props.children
}

export default Parent
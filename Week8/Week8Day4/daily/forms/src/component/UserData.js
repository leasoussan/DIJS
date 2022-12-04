// const UserData = (props) => {
//     let { handleSubmit } = props
//     console.log("test", props);
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Name</label>
//                 <input
//                     id="name"
//                     type="text"
//                 />
//                 <label htmlFor="age">Age</label>
//                 <input
//                     id="age"
//                     type="number"
//                 />
//                 <label htmlFor="email">Email</label>
//                 <input
//                     id="email"
//                     type="email"
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </>

//     )
// }

// export default UserData;

import InputWithLabel from "./InputWithLabel";

const UserData = (props) => {
    let { handleSubmit, handleChange, checkGender, handleDietSelect } = props
    return (
        <>
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <InputWithLabel id="first_name" label="Name" type="text" />
                <InputWithLabel id="last_name" label="Last Name" type="text" />
                <InputWithLabel id="age" label="Age" type="number"  />
                
                <InputWithLabel id="gender" name ="female" value="female" type="radio" />
                <InputWithLabel id="gender" name ="male"  type="radio" value="male" />
                {/* <select > */}
                <InputWithLabel id="destination" label="Destination" type="select" />
                {/* </select> */}
                <InputWithLabel id="diet_restrication" label="Nuts Free" type="checkbox" onClick={handleDietSelect} />
                <InputWithLabel id="diet_restrication" label="Lactose free" type="checkbox"  />
                <InputWithLabel id="diet_restrication" label="Vegan" type="checkbox"  />



                <button type="submit">Submit</button>
            </form>
        </>

    )
}

export default UserData;

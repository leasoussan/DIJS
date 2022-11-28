import App from "../App";

const UserFavoriteColors = (props) => {
    const {fav_animals} = props;
    return (
        // <li>{props.fav_animals}</li>
        // console.log(animals)
        fav_animals.map((item, index) => {
            return (<div key={index}>

            
                   <li> {item}</li>
                   </div>

            )
        })
    )

}


export default UserFavoriteColors
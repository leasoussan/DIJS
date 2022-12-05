import { connect } from "react-redux"

 const MovieDetail =(props)=>{
    console.log(props);
    return(
        <div style={{display:'inline-block'}}>
            <h1>Movie Detail </h1>
            <h2> title{props.detail.title}</h2>
            <h2>Rating{props.detail.rating}</h2>

            <h2> Release Date{props.detail.releaseDate}</h2>

        </div>
    )
}


const mapStageToProp = (state) =>{
    return{    
        detail:state.movieDetail
    }
    
}


export default connect(mapStageToProp)(MovieDetail)


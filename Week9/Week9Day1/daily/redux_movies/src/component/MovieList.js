// in order to connect to the store - the compo need to import connect 
import { connect } from 'react-redux'
import { showDetail } from '../redux/actions';



const MovieList = (props) => {
    console.log(props);
    return (
        <div style={{display:'inline-block', width:'600px'}}>
            <h1>Movie List</h1>
            {
                props.list.map((item, i) => {
                    return (
                        <div key={i}>
                            {item.title}
                            <button onClick={()=>props.details(item)}> Details</button>
                        </div>
                    )
                })
            }

        </div>
    )
}


const mapStageToProps = state => {
    return {
        list: state.movieList
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        details:(movie => dispatch(showDetail(movie)))
    }
}

export default connect(mapStageToProps,mapDispatchToProps)(MovieList)
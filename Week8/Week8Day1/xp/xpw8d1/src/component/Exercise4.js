import img from '../images/logo192.png'
import './Excercise4.css'


const Exercise4 = () => {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
        <>
            <h1 style={ style_header }>This is the red Tag and s blue sky</h1>
            <p className='para'> This is a paragraphe styles Time New roman</p>
            <form>
            <label>Enter your Name</label>
            <input value={'your name in english please'} style={{width:'300px', height:"3rem"}}/>
            </form>
            <img src={img} style={{}}></img>

        </>
    )
}


export default Exercise4
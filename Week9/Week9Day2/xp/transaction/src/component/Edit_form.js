const EditForm = (props)=>{

console.log("welcome to  your update");

    return(
        <>
        <h1>WELOCME         </h1>
        <form onSubmit={this.handleSubmit}>
            <input name='account' placeholder='Account Number' onChange={this.handleInputChange} type='text' /><br/>
            <input name='fsc' placeholder='FSC' onChange={this.handleInputChange} type='text' /><br/>
            <input name='name' placeholder='Name' onChange={this.handleInputChange} type='text' /><br/>
            <input name='amount' placeholder='Amount' onChange={this.handleInputChange} type='text' /><br/>
            <input type='submit' value={this.props.currentIndex===-1 ? 'Submit' : 'Update' } />
          </form>
          </>
    )
}

export default EditForm
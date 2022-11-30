import React from "react";

class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            search:'',
            name:'',
            price: 0
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(data => {
                this.setState({ products: data })
            })
            .catch(e => {
                console.log(e)
            })
    }
    handleSearch= (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    searchProducts=(e)=>{
        fetch(`http://localhost:5000/api/search?q=${this.state.search}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({products:data})
        })
        .catch(e=> {
            console.log(e);
        })
    }

    addProduct =(e)=>{
        e.preventDefault();
        // prevent Default in form as we dont want to auto refresh 
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({name:this.state.name, price:this.state.price})
        };
        fetch(`http://localhost:5000/api/products`, requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                this.setState({products:data })
                
    })
            .catch(e=> {
                console.log(e);
            })
    }
// second way to do it with descontruct
    // addProduct =(e)=>{
    //     const {name, price} = this.state;

    //     e.preventDefault();
    //     // prevent Default in form as we dont want to auto refresh 
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json' },
    //         body: JSON.stringify({name, price})
    //     };
    //     fetch(`http://localhost:5000/api/products`, requestOptions)
    //         .then(response => response.json())
    //         .then(data=> console.log())
    //         // .then(data => this.setState({ response.: data.id }));
        
    // }

    render(){
        return(
            <>
                <div>
                    Search <input type="text" onChange={this.handleSearch} name="search" />
                    <button onClick={this.searchProducts}> Search </button>
                </div>
                <div>
                    <h2>Add Products</h2>
                </div>
                <form onSubmit={this.addProduct}>
                    name:<input type='text' onChange={this.handleSearch} name="name" />
                    Price: <input type='text' onChange={this.handleSearch} name="price"/>
                    <input type='submit' value="Add Product" />
                </form>
                {
                    this.state.products.map(item => {
                        return (
                            <div key={item.id}>
                                <h1> {item.name}</h1>
                                <p>{item.price}</p>

                            </div>
                        )
                    })
                }

            </>
        )

    }
}
export default Products
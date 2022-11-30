import React from "react";

class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            products;[]
        }
    }


    render() {
        <>
            {
                this.state.products(item => {
                    return (
                        <div key={item.id}>
                            <h1> {item.name}</h1>
                            <p>{item.price}</p>

                        </div>
                    )
                })
            }



        </>


    }
}
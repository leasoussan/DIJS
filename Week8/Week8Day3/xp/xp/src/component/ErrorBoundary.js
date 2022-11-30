import React from "react";


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: "", errorInfo: "" };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log("error getdrev", error);
        return { hasError: true };
      }
    
    componentDidCatch(error, errorInfo) {
        this.setState({ error: this.state.error, errorInfo: this.state.errorInfo })
    }


    render() {

        if (this.state.hasError){
            return (
                <>
                    <h1> you got to the wrong place </h1>
                    <p><u>The error is</u> {this.state.error.toString()} </p>
                </>
            )
        }
        return this.props.children

    }
}


export default ErrorBoundary

//  i dont get the message display here 
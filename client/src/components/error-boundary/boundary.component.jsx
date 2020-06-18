import React from "react";
import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from "./boundary.styles";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasErrored: false
        }
    }


    static getDerivedStateFromError(error) {
        // process the error
        return {
            hasErrored: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error)
    }

    render() {
        if(this.state.hasErrored){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={"https://i.imgur.com/qIufhof.png"}/>
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary
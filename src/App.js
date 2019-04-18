import React, { Component } from "react";
import "./App.css";
import { Container, Header } from "semantic-ui-react";
import MapComponent from "./components/MapComponent";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
    "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container textAlign="center">
                    <Header
                        as="h1"
                        style={{
                            padding: "15px 0px 15px 0px"
                        }}
                    >
                        Sarajevo Interactive
                    </Header>
                </Container>
                <MapComponent />
            </div>
        );
    }
}

export default App;

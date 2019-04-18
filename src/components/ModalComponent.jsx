import React, { Component } from "react";
import { Button, Header, Modal, Container, Divider } from "semantic-ui-react";

class ModalComponent extends Component {
    state = {
        type: "scc"
    };

    componentDidMount() {
        this.setState({
            type: this.props.type
        });
    }

    UNSAFE_componentWillReceiveProps(ownProps) {
        this.setState({
            type: ownProps.type
        });
    }

    handleClose = () => this.props.saveState("closeModal", false);

    generateContent = type => {
        switch (type) {
            case "scc":
                return (
                    <div>
                        <Container textAlign="center">
                            <Header size="huge">Sarajevo City Center</Header>
                        </Container>
                        <br />
                        <Container
                            style={{
                                width: "100%",
                                height: "560px"
                            }}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                title={type}
                                src="https://www.youtube.com/embed/__U8ssrGtZE"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </Container>
                        <Container textAlign="justified">
                            <Divider />
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa strong. Cum sociis natoque
                                penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede
                                justo, fringilla vel, aliquet nec, vulputate
                                eget, arcu. In enim justo, rhoncus ut, imperdiet
                                a, venenatis vitae, justo. Nullam dictum felis
                                eu pede link mollis pretium. Integer tincidunt.
                                Cras dapibus. Vivamus elementum semper nisi.
                                Aenean vulputate eleifend tellus. Aenean leo
                                ligula, porttitor eu, consequat vitae, eleifend
                                ac, enim. Aliquam lorem ante, dapibus in,
                                viverra quis, feugiat a, tellus. Phasellus
                                viverra nulla ut metus varius laoreet. Quisque
                                rutrum. Aenean imperdiet. Etiam ultricies nisi
                                vel augue. Curabitur ullamcorper ultricies nisi.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa strong. Cum sociis natoque
                                penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede
                                justo, fringilla vel, aliquet nec, vulputate
                                eget, arcu. In enim justo, rhoncus ut, imperdiet
                                a, venenatis vitae, justo. Nullam dictum felis
                                eu pede link mollis pretium. Integer tincidunt.
                                Cras dapibus. Vivamus elementum semper nisi.
                                Aenean vulputate eleifend tellus. Aenean leo
                                ligula, porttitor eu, consequat vitae, eleifend
                                ac, enim. Aliquam lorem ante, dapibus in,
                                viverra quis, feugiat a, tellus. Phasellus
                                viverra nulla ut metus varius laoreet. Quisque
                                rutrum. Aenean imperdiet. Etiam ultricies nisi
                                vel augue. Curabitur ullamcorper ultricies nisi.
                            </p>
                        </Container>
                    </div>
                );
            default:
                break;
        }
    };

    render() {
        const { open } = this.props;

        return (
            <div>
                <Modal
                    open={open}
                    onClose={this.handleClose}
                    size="large"
                    closeIcon
                >
                    <Modal.Content>
                        {this.generateContent(this.state.type)}
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            color="green"
                            onClick={() => {
                                this.handleClose();
                            }}
                        >
                            Close
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default ModalComponent;

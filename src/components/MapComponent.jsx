import React, { Component } from "react";
import { Map } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { Polygon } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ModalComponent from "./ModalComponent";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

class MapComponent extends Component {
    state = {
        positions: [
            {
                type: "scc",
                coordinates: [
                    [43.8556781, 18.4070402],
                    [43.8554498, 18.4070617],
                    [43.8554228, 18.4073138],
                    [43.8551056, 18.4072816],
                    [43.8550669, 18.4092075],
                    [43.8556897, 18.4090948],
                    [43.8556781, 18.4070402]
                ]
            },
            {
                type: "history_museum",
                coordinates: [
                    [43.8550901, 18.4016383],
                    [43.8539335, 18.4017777],
                    [43.8539567, 18.4036285],
                    [43.85521, 18.4035158],
                    [43.8550901, 18.4016383]
                ]
            },
            {
                type: "local_museum",
                coordinates: [
                    [43.8553454, 18.4004903],
                    [43.8545795, 18.4005064],
                    [43.8546066, 18.4012467],
                    [43.8553493, 18.4011769],
                    [43.8553454, 18.4004903]
                ]
            },
            {
                type: "holiday",
                coordinates: [
                    [43.8569197, 18.4036124],
                    [43.8561036, 18.4035856],
                    [43.8560958, 18.4039503],
                    [43.8563008, 18.4039718],
                    [43.8562776, 18.4044707],
                    [43.8565484, 18.404476],
                    [43.8565407, 18.4042186],
                    [43.8565716, 18.4039611],
                    [43.8569043, 18.4039718],
                    [43.8569197, 18.4036124]
                ]
            }
        ],
        lat: 43.855767,
        lng: 18.4041059,
        zoom: 17,
        modalOpen: false,
        type: "scc"
    };

    saveState = (type, state) => {
        switch (type) {
            case "closeModal":
                this.setState({
                    modalOpen: state
                });
                break;
            default:
                break;
        }
    };

    handleOpen = type => {
        this.setState(
            {
                type
            },
            () => {
                this.setState({ modalOpen: true });
            }
        );
    };

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div
                style={{
                    height: "800px",
                    width: "100%"
                }}
            >
                <Map
                    style={{
                        height: "100%",
                        width: "100%"
                    }}
                    center={position}
                    zoom={this.state.zoom}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />
                    {this.state.positions.map((item, index) => {
                        return (
                            <Polygon
                                key={index}
                                positions={item.coordinates}
                                onClick={() => {
                                    this.handleOpen(item.type);
                                }}
                            />
                        );
                    })}
                </Map>
                <ModalComponent
                    open={this.state.modalOpen}
                    saveState={this.saveState}
                    type={this.state.type}
                />
            </div>
        );
    }
}

export default MapComponent;

/* eslint-disable no-dupe-args */
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class PriceTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      name: "",
      address: "",
      copied: false,
    };
    this.showModal = this.showModal.bind(this);
  }
  showModal = (name, address) => {
    this.setState({
      isOpen: !this.state.isOpen,
      name,
      address,
    });
  };

  render() {
    return (
      <footer className="p-4 bg-info">
        <div className="container-fluid text-center text-md-left text-white">
          <div className="row">
            <div className="col-md-4 mt-md-0 mt-3 text-justify">
              <h5 className="text-uppercase text-white ">MercadoCripto</h5>
              <p>
                Observa y compara los valores de criptoactivos de los
                principales exchanges en Chile. Toda la información que
                necesitas. Tiempo real. Un solo portal.
              </p>
            </div>
            <div className="col-md-4 mt-md-0 mt-3 text-center">
              <h5 className="text-center" style={{ paddingBottom: 1 + "em" }}>
                Agradecemos Donaciones
              </h5>
              <img
                alt="btc"
                width="45"
                src={require("../imgs/btc.png")}
                onClick={() => {
                  this.showModal("BTC", "1HMugYDr83APw8zY8DKKTK7Y6b1eF8C89J");
                }}
              />{" "}
              <img
                alt="eth"
                width="45"
                src={require("../imgs/eth.png")}
                onClick={() => {
                  this.showModal(
                    "ETH",
                    "0xdC7E0F118CB2A1e719464D2b47aC8AC0B2bd8475"
                  );
                }}
              />
            </div>
            <div className="col-md-4 mt-md-0 mt-3">
              <h5 className="text-uppercase text-white ">¿Como Funciona?</h5>
              <p>
                Cada 1 minuto, buscamos los precios de los tickers nacionales.
                Cada 5 minutos, por los limites de la api, buscamos el precio de
                CoinMarketCap.
              </p>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            © 2020 MercadoCripto
            <a
              href="https://github.com/LeoSalgadoA/Mercado-Cripto"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              {" "}
              @ Github
            </a>
          </div>{" "}
          <Modal show={this.state.isOpen}>
            <Modal.Header>
              <Modal.Title>{this.state.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CopyToClipboard
                text={this.state.address}
                onCopy={() => {
                  console.log("copy");
                  toast.success("Copiado al portapapeles");
                  this.setState({ copied: true });
                }}
              >
                <span className="copyPaste">{this.state.address}</span>
              </CopyToClipboard>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => this.showModal("isOpen")}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <ToastContainer />
        </div>
      </footer>
    );
  }
}

export default PriceTable;

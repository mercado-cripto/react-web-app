/* eslint-disable no-dupe-args */
import React from "react";
import Table from "react-bootstrap/Table";
import { API } from "aws-amplify";
import NumberFormat from "react-number-format";

class PriceTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buda: null,
      cmc: null,
      sttg: null,
      orx: null,
      cmkt: null,
      dolar: 0,
      showingAlert: true,
    };
  }

  componentDidMount() {
    this.getDolar();
    this.getData();
    setInterval(() => {
      this.getData();
    }, 15000);
  }

  async getDolar() {
    let res = await fetch("https://mindicador.cl/api/dolar", {
      method: "get",
    });

    const data = await res.json();
    let dolar = parseFloat(data.serie[0].valor);
    console.log(dolar);
    this.setState({
      dolar,
    });
  }
  async getData() {
    this.setState({
      showingAlert: false,
    });
    const myInit = {
      headers: {},
    };
    const path = "/getData";
    try {
      let data = await API.get("getData", path, myInit);
      this.setState(
        {
          buda: data.buda,
          cmc: data.cmc,
          sttg: data.sttg,
          orx: data.orx,
          cmkt: data.cmkt,
        },
        () => {
          this.setState({
            showingAlert: true,
          });
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
  prettyPrice(value, includeClp) {
    if (includeClp) {
      return (
        <div
          className={`alert alert-success  ${
            this.state.showingAlert ? "alert-shown" : "alert-hidden"
          }`}
        >
          USD
          <NumberFormat
            value={value}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
          />
          <br></br>CLP
          <NumberFormat
            value={value * this.state.dolar}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={0}
          />
        </div>
      );
    }

    return (
      <div
        className={`alert alert-success p-all ${
          this.state.showingAlert ? "alert-shown" : "alert-hidden"
        }`}
      >
        CLP
        <NumberFormat
          value={value}
          displayType={"text"}
          thousandSeparator={true}
          decimalScale={0}
        />
      </div>
    );
  }
  getDataInfo(market, coin) {
    try {
      if (this.state.buda != null) {
        if (market === "BUDA") {
          let a = this.state.buda.find((obj) => {
            return obj.data.symbol === coin;
          });
          return this.prettyPrice(a.data.last_price_clp);
        }
      }
      if (this.state.cmc != null) {
        if (market === "CMC") {
          let a = this.state.cmc.find((obj) => {
            return obj.data.symbol === coin;
          });
          return this.prettyPrice(a.data.price_usd, true);
        }
      }
      if (this.state.orx != null) {
        if (market === "ORX") {
          let a = this.state.orx.find((obj) => {
            return obj.data.symbol === coin;
          });
          return this.prettyPrice(a.data.last_price_clp);
        }
      }
      if (this.state.sttg != null) {
        if (market === "STTG") {
          let a = this.state.sttg.find((obj) => {
            return obj.data.symbol === coin;
          });
          return this.prettyPrice(a.data.price_bid);
        }
      }
      if (this.state.cmkt != null) {
        if (market === "CMKT") {
          let a = this.state.cmkt.find((obj) => {
            return obj.data.symbol === coin;
          });
          return this.prettyPrice(a.data.last_price_clp);
        }
      }
    } catch (e) {
      return <div className={`alert alert-warning p-all`}>No Disponible</div>;
    }
  }

  render() {
    return (
      <>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th></th>
              <th><a href="https://www.buda.com/" target="_blank" rel="noopener noreferrer">Buda</a></th>
              <th><a href="https://www.cryptomkt.com/" target="_blank" rel="noopener noreferrer">CryptoMkt</a></th> 
              <th><a href="https://www.orionx.com/" target="_blank" rel="noopener noreferrer">OrionX</a></th>
              <th><a href="https://www.satoshitango.com/" target="_blank" rel="noopener noreferrer">Satoshi Tango</a></th>
              <th><a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">CoinMarketCap</a></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://bitcoin.org/" target="_blank" rel="noopener noreferrer">BTC</a></td>
              <td className="uno">{this.getDataInfo("BUDA", "BTC")}</td>
              <td>{this.getDataInfo("CMKT", "BTC")}</td>
              <td>{this.getDataInfo("ORX", "BTC")}</td>
              <td>{this.getDataInfo("STTG", "BTC")}</td>
              <td>{this.getDataInfo("CMC", "BTC")}</td>
            </tr>
            <tr>
              <td><a href="https://www.ethereum.org/" target="_blank" rel="noopener noreferrer">ETH</a></td>
              <td>{this.getDataInfo("BUDA", "ETH")}</td>
              <td>{this.getDataInfo("CMKT", "ETH")}</td>
              <td>{this.getDataInfo("ORX", "ETH")}</td>
              <td>{this.getDataInfo("STTG", "ETH")}</td>
              <td>{this.getDataInfo("CMC", "ETH")}</td>
            </tr>
            <tr>
              <td><a href="https://litecoin.org/" target="_blank" rel="noopener noreferrer">LTC</a></td>
              <td>{this.getDataInfo("BUDA", "LTC")}</td>
              <td>{this.getDataInfo("CMKT", "LTC")}</td>
              <td>{this.getDataInfo("ORX", "LTC")}</td>
              <td>{this.getDataInfo("STTG", "LTC")}</td>
              <td>{this.getDataInfo("CMC", "LTC")}</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default PriceTable;

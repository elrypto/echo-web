import React, { Component } from "react";
import {
    Client, LocalAddress, CryptoUtils, LoomProvider
  } from 'loom-js'

import LoomContract from "./../loom/LoomContract";


/*
0x85fE064e89F9860514B52B407C0fc829860a7735 (contract)
0x3AD1b0349CbfB5127D86Cc18c61E87F0af4177F8 (account)
*/


export default class LoomTest extends Component {
  state = { 
    currentIndexName: "", 
    web3: null, 
    accounts: null, 
    contract: null, 
    indexNameText: "",
    tokenToAddSymbol: "",
    resultVal: ""
  };


  constructor(props){
    super(props);

    this.contract = new LoomContract();
  }


  componentWillMount = async () => {
    await this.contract.loadContract();
  };

  storeValue = async() => {
    console.log("create Index()");
    let contract = this.contract.getContract();
    await contract.methods.setTestVal(this.state.indexNameText).send({from: this.contract.getCurrentUserAddress()});
  }

  textIndextNameChangeHandler = e => {
    this.setState({indexNameText: e.target.value});
  }

  getValue = async() => {
    console.log("get value()");
    let contract = this.contract.getContract();
    let retval = await contract.methods.getTestVal().call();
    console.log("returned val:" + retval);
    this.setState({resultVal: retval});
  }


  render() {
  
    return (
      <div className="App">
        <h3>--*-*-LooooooomTestttt-**-**</h3>
        <div>Index name is: {this.state.currentIndexName}</div>
        <input type="text" onChange={this.textIndextNameChangeHandler} value={this.state.indexNameText} />
        <button class="btn btn-secondary" onClick={this.storeValue}>
           Create Index (name) OnChain</button>
           
          <button class="btn btn-outline-secondary" onClick={this.getValue}>Get Value from Chain</button>
          <div>{this.state.resultVal}</div>

      </div>
    );
  }
}


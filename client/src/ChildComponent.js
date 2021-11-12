import React, { useContext } from "react";
import BlockchainContext from "./BlockchainContext";
import BlockchainContext from "./BlockchainContext";

export default ChildComponent() {
    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, accounts } = blockchainContext;
}
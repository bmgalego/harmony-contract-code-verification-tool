import { codeVerification } from "./verification/index";
import path from "path"

const contracts = [
  {
    contractAddress: "0x0c1310bbd93c6977fde20dc813cff8236ba1f0dd",
    abi: "../abis/MultiSigWallet.json",
    chain: "mainnet",
  },
  {
    contractAddress: "0x8139d578f11638c78e16685eb2804c2a34482e41",
    abi: "../abis/Deposit.json",
    chain: "mainnet",
  },
  {
    contractAddress: "0x05d11b7082d5634e0318d818a2f0cd381b371ea5",
    abi: "../abis/BUSDHmyManager.json",
    chain: "mainnet",
  },
  {
    contractAddress: "0xc0c7b147910ef11f6454dc1918ecde9a2b64a3a8",
    abi: "../abis/LINKHmyManager.json",
    chain: "mainnet",
  },
  {
    contractAddress: "0x38092d17d3641b6fa49668775948af71b430765e",
    abi: "../abis/HRC20HmyManager.json",
    chain: "mainnet",
  },
  {
    contractAddress: "0x39ec213272dda1f46424726bb20d82c3861568c0",
    abi: "../abis/ERC721HmyManager.json",
    chain: "mainnet",
  },
  {
    contractAddress: "0x0f916E162362b12e87b1Af221BB5A3e320dd9aeb",
    abi: "../abis/StablePriceOracle.json",
    chain: "testnet",
  },
  {
    // https://github.com/harmony-one/davinci_nft_marketplace/tree/098733513ac38a9e80572ab1dcbfe098a16aecb3
    contractAddress: "0x85264765BA42bd299aB7B1b299ca0b4A00Ff9113",
    abi: "../abis/DavinciToken.json",
    chain: "testnet",
  },
];

const run = async () => {
  // const res = await codeVerification({
  //   contractAddress: "one1rcs4yy4kln53ux60qdeuhhvpygn2sutn500dhw",
  //   githubURL: "https://github.com/rachit2501/Lottery-System/blob/master/contracts/Lottery.sol",
  //   solidityVersion: "0.4.17",
  //   chain: "testnet",
  // });

  for (const { contractAddress, abi, chain } of contracts) {
    await codeVerification({
      contractAddress,
      abi: path.resolve(abi),
      chain,
    });
  }

  /*
   const res = await codeVerification({
     contractAddress: "0x0c1310bbd93c6977fde20dc813cff8236ba1f0dd",
     githubURL:
       "https://github.com/harmony-one/ethhmy-bridge/blob/master/contracts/lib/MultiSigWallet.sol",
     solidityVersion: "0.5.17",
     chain: 'mainnet'
   });
*/
  /*const res = await codeVerification({
    contractAddress: "0x0f916E162362b12e87b1Af221BB5A3e320dd9aeb",
    githubURL:
      "https://github.com/ensdomains/ethregistrar/blob/master/contracts/StablePriceOracle.sol",
    solidityVersion: "0.5.17",
    chain: 'testnet'
  });*/
};

run();

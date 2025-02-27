import { codeVerification } from './verification/index'

const run = async () => {
// const res = await codeVerification({
//     contractAddress: 'one1rcs4yy4kln53ux60qdeuhhvpygn2sutn500dhw',
//     githubURL:
//       'https://github.com/rachit2501/Lottery-System/blob/master/contracts/Lottery.sol',
//     solidityVersion: '0.4.17',
//     chain: 'testnet'
//   })

  // https://explorer.testnet.harmony.one/#/address/one1s5nywed6g27jnx4hkxefnjstfgq0lygnf749xt
  const res = await codeVerification({
    contractAddress: "one1s5nywed6g27jnx4hkxefnjstfgq0lygnf749xt",
    githubURL:
      "https://github.com/harmony-one/davinci_nft_marketplace/blob/098733513ac38a9e80572ab1dcbfe098a16aecb3/contracts/token/DavinciToken.sol",
    solidityVersion: "0.6.12",
    chain: "testnet",
  });


 /* const res = await codeVerification({
     contractAddress: "one16rgcltnlrekr664ueczvvhl2j7s5p6amezdhw3",
     githubURL:
       "https://github.com/harmony-one/davinci_nft_marketplace/blob/master/contracts/token/DavinciToken.sol",
     solidityVersion: "0.6.12",
    chain: 'testnet'
   });*/

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

  console.log({ res })
}

run()

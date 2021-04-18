import { arrayify } from "@ethersproject/bytes";
import cbor from "cbor";

// https://docs.soliditylang.org/en/latest/metadata.html#encoding-of-the-metadata-hash-in-the-bytecode
export function getBytecodeAndMetadata(deployedBytecode: string) {
  const buff = Buffer.from(arrayify(deployedBytecode));
  const metadataLength = buff.readIntBE(buff.length - 2, 2);
  const metadata = buff.slice(buff.length - metadataLength - 2, buff.length - 2);
  const bytecode = buff.slice(0, buff.length - metadataLength - 2);

  console.log({ metadata: cbor.decode(metadata) });

  return {
    metadata,
    bytecode,
  };
}

export const verifyByteCode = (compiledByteCode: string, actualByteCode: string, solidityVersion: string) => {
  const compiled = getBytecodeAndMetadata(compiledByteCode);
  const actual = getBytecodeAndMetadata(actualByteCode);

  return compiled.bytecode.equals(actual.bytecode);
};

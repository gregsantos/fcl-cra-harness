import {ECDSA_P256, encodeKey, SHA3_256} from "@onflow/util-encode-key"
import {ec as EC} from "elliptic"
const p256 = new EC("p256")

export const LABEL = "Create Account"

export const encodePubKey = pubKey => {
  return encodeKey(pubKey, ECDSA_P256, SHA3_256, 1000)
}

export const createNewAcount = async () => {
  const key = p256.genKeyPair()
  const pubKey = key.getPublic("hex").slice(2)
  const privKey = key.getPrivate("hex")
  console.log(pubKey, privKey)
  const data = {
    publicKey: pubKey,
    signatureAlgorithm: "ECDSA_P256",
    hashAlgorithm: "SHA3_256",
  }
  const url = "https://hardware-wallet-api-testnet.staging.onflow.org/accounts"
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    console.log("new account", response)
    const account = await response.json()
    return account
  } catch (error) {
    console.log(error)
  }
}

export const CMD = async () => {
  console.log("Create new account")
  await createNewAcount()
}

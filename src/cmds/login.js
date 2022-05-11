import * as fcl from "@onflow/fcl"
import {yup, nope, serviceOfType} from "../util"

export const LABEL = "Log In"
export const CMD = async () => {
  // prettier-ignore
  let res = await fcl
    .reauthenticate()
    .then(yup("US-1"))
    .then(res => res)
    .catch(nope("US-1"))

  const accountProofService = serviceOfType(res.services, "account-proof")

  if (accountProofService) {
    const fclCryptoContract =
      (await fcl.config.first(["env", "flow.network"])) === "local"
        ? process.env.REACT_APP_FCL_CRYPTO_CONTRACT
        : null

    const verified = await fcl.AppUtils.verifyAccountProof(
      "Awesome App (v0.0)",
      accountProofService.data,
      {fclCryptoContract}
    )
    console.log("Verified Account", verified)
  }
  return res
}

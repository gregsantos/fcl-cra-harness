import * as fcl from "@onflow/fcl"
import {yup, nope} from "../util"

const toHexStr = str => {
  return Buffer.from(str).toString("hex")
}

export const LABEL = "User Sign & Verify"
export const CMD = async () => {
  const MSG = toHexStr("FOO")
  let res
  try {
    res = await fcl.currentUser().signUserMessage(MSG)
  } catch (error) {
    console.log(error)
  }
  yup("User Sign", res)
  if (typeof res === "string") return
  if (res)
    try {
      return await fcl.verifyUserSignatures(MSG, res).then(console.log)
    } catch (error) {
      console.log(error)
    }
}

import * as fcl from "@onflow/fcl"
import {yup, nope} from "../util"

export const LABEL = "Log In"
export const CMD = async () => {
  // prettier-ignore
  await fcl
    .reauthenticate()
    .then(yup("US-1"))
    .then(res => res)
    .catch(nope("US-1"))
}

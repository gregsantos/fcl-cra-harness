import * as fcl from "@onflow/fcl"
import {send as grpcSend} from "@onflow/transport-grpc"
import {send as httpSend} from "@onflow/transport-http"

const USE_LOCAL = false

// prettier-ignore
fcl.config()
  .put("app.detail.title", "Test Harness")
  .put("app.detail.icon", "https://placekitten.com/g/200/200")
  .put("service.OpenID.scopes", "email")

if (USE_LOCAL) {
  // prettier-ignore
  fcl
    .config()
    .put("env", "local")
    .put("debug.accounts", true)
    .put("logger.level", 2)
    .put("accessNode.api", "http://localhost:8080")
    .put("discovery.wallet", "http://localhost:8701/fcl/authn")
    .put("sdk.transport", grpcSend)
    .put("debug.accounts", true)
    .put("fcl.accountProof.resolver", async () => ({
      appIdentifier: "test app",
      nonce: "3037366134636339643564623330316636626239323161663465346131393662",
    }))
  // Discovery API
  //.put("discovery.authn.include", ["0x9d2e44203cb13051"])
  //.put("discovery.authn.endpoint", "http://localhost:3002/api/testnet/authn")
} else {
  // prettier-ignore
  fcl
    .config()
    // testnet
    .put("env", "testnet")
    // .put("debug.accounts", true)
    .put("accessNode.api", "https://rest-testnet.onflow.org")
    .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")
    .put("sdk.transport", httpSend)
    .put("fcl.accountProof.resolver", async () => ({
      appIdentifier: "test app",
      nonce: "3037366134636339643564623330316636626239323161663465346131393662",
    }))
  // grpc
  // .put("accessNode.api", "https://access-testnet.onflow.org")
  // .put("sdk.transport", grpcSend)
  // mainnet
  // .put("env", "mainnet")
  //.put("accessNode.api", "https://access-mainnet-beta.onflow.org")
  //.put("discovery.wallet", "https://fcl-discovery.onflow.org/authn")
}

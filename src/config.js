import * as fcl from "@onflow/fcl"

const USE_LOCAL = true

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
    .put("accessNode.api", "http://localhost:8080")
    .put("discovery.wallet", "http://localhost:3000/fcl/authn")
    .put("discovery.wallet.method", "IFRAME/RPC")
    .put("fcl.appDomainTag", "AWESOME-APP-V0.0-user")
} else {
  // prettier-ignore
  fcl
    .config()
    .put("env", "testnet")
    .put("accessNode.api", "https://access-testnet.onflow.org")
    .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")
    .put("discovery.wallet.method", "IFRAME/RPC")
    .put("fcl.appDomainTag", "AWESOME-APP-V0.0-user")
  // mainnet
  // .put("accessNode.api", "https://access-mainnet-beta.onflow.org")
  // .put("discovery.wallet", "https://fcl-discovery.onflow.org/authn")
}

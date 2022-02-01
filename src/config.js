import * as fcl from "@onflow/fcl"

const USE_LOCAL = false
const isServerSide = () => typeof window === "undefined"

const LOCAL_STORAGE = {
  can: !isServerSide(),
  get: async key => JSON.parse(localStorage.getItem(key)),
  put: async (key, value) => localStorage.setItem(key, JSON.stringify(value)),
}
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
    .put("discovery.wallet", "http://localhost:8701/fcl/authn")
    .put("discovery.wallet.method", "IFRAME/RPC")
    .put("debug.accounts", true)
    // new discovery API
    //.put("discovery.authn.include", ["0x9d2e44203cb13051"])
    //.put("discovery.authn.endpoint", "http://localhost:3002/api/testnet/authn")
    .put("fcl.appDomainTag", "AWESOME-APP-V0.0-user")
} else {
  // prettier-ignore
  fcl
    .config()
    .put("env", "testnet")
    .put("accessNode.api", "https://access-testnet.onflow.org")
    .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")
    // .put("sdk.transport", grpcSend)
    .put("debug.accounts", true)
    //.put("discovery.wallet.method", "EXT/RPC")
    .put("fcl.appDomainTag", "AWESOME-APP-V0.0-user")
  // mainnet
  //.put("accessNode.api", "https://access-mainnet-beta.onflow.org")
  //.put("discovery.wallet", "https://fcl-discovery.onflow.org/authn")
  // .put("fcl.storage", LOCAL_STORAGE)
}

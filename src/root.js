import {useState} from "react"
import "./config"
import "./decorate"
import {COMMANDS} from "./cmds"
import useCurrentUser from "./hooks/use-current-user"
import useConfig from "./hooks/use-config"
import {createNewAcount} from "./createAccount"

const renderCommand = d => {
  return (
    <li key={d.LABEL}>
      <button onClick={d.CMD}>{d.LABEL}</button>
    </li>
  )
}

export default function Root() {
  const currentUser = useCurrentUser()
  const config = useConfig()
  const [account, setAccount] = useState({})
  const createNewAccount = async () => {
    const newAccount = await createNewAcount()
    setAccount(newAccount)
  }

  return (
    <>
      <div>
        <ul>{COMMANDS.map(renderCommand)}</ul>
        <div>
          {<button onClick={createNewAccount}>Create New Account</button>}
        </div>
        {account && <pre>{JSON.stringify({account}, null, 2)}</pre>}
        <pre>{JSON.stringify({currentUser, config}, null, 2)}</pre>
      </div>
    </>
  )
}

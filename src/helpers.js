//metamask connection
export const connect = async () => {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        console.log("window.ethereum:", window.ethereum);

        //if more accounts, getting account0
        const account = handleAccountsChanged(accounts)
        return account
    } catch (error) {
        //4001 speacial metamask code, ser denies the connection request
        if (error.code === 4001) {
            alert("Please connect to your metamask to continue.")
        } else {
            console.error("Error connecting to metamask", error)
        }
    }
}

export const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
        console.log("Please connect to metamask")
    } else {
        //if you change your metamask account 
        //do one for network change , but cos RPC no need but just make one 4 practice
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", () => { window.location.reload() });
            return accounts[0];
        }
    }
}

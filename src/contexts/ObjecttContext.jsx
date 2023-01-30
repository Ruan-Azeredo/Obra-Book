import { createContext, useState } from "react";

const ObjecttContext = createContext()

export function ObjecttProvider(props) {
    const [ObjecttGlobal, setObjecttGlobal] = useState()
    const [EngineerId, setEngineerId] = useState(true) //para manter logado em produção

    console.log(EngineerId)


    return (
        <ObjecttContext.Provider value={{
            ObjecttGlobal, setObjecttGlobal,
            EngineerId, setEngineerId
        }}>
            {props.children}
        </ObjecttContext.Provider>
    )
}

export default ObjecttContext
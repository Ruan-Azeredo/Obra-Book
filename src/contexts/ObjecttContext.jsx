import { createContext, useState } from "react";

const ObjecttContext = createContext()

export function ObjecttProvider(props) {
    const [ObjecttGlobal, setObjecttGlobal] = useState()

    console.log(ObjecttGlobal)


    return (
        <ObjecttContext.Provider value={{
            ObjecttGlobal, setObjecttGlobal
        }}>
            {props.children}
        </ObjecttContext.Provider>
    )
}

export default ObjecttContext
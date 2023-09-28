"use client";

import { createContext, useState } from "react";

interface WorldContextValue {
    name: string;
    age: number;
    handleSetName: (nameStr: string) => void;
}

const WorldDefaultValue = {
    name: "",
    age: 0,
    handleSetName: (nameStr: string) => { }
}

const WorldContext = createContext<WorldContextValue>(WorldDefaultValue)

const WorldProvider = ({ children }: { children: React.ReactNode }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const handleSetName = (nameStr: string) => {
        setName(nameStr)
    }

    const valueToShare = {
        name : "Wellcome to Digimon World",
        age,
        handleSetName
    }

    return (
        <WorldContext.Provider value={valueToShare}>
            {children}
        </WorldContext.Provider>
    )
}
export { WorldProvider }
export default WorldContext;
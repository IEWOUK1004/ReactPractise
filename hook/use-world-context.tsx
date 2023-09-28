import { useContext, useState } from "react"
import WorldContext from "../context/worldsetting"

const useWorldContext = () => {
    const context = useContext(WorldContext);

    return context === undefined ? Error("opps-we do not seem to be inside the provider") : context;

    // if (context === undefined) {
    //     throw Error("opps-we do not seem to be inside the provider")
    // }
    // return context

}
export default useWorldContext;
import { useState, createContext, useContext } from "react";

export const SessionContext = createContext({
    session: false,
    setSession: ()=>{}
});

export function useSession () {
    return useContext(SessionContext);
}
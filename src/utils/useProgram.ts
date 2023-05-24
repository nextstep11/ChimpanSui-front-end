import { createContext, useContext } from "react";

export interface ProgramContextState{
    mint() : void;
}

export const ProgramContext = createContext<ProgramContextState>({
} as ProgramContextState)

export function useProgram() : ProgramContextState{
    return useContext(ProgramContext)
}
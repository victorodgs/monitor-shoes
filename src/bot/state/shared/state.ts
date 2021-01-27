import { Partners } from "../../PartnersConfig"

export interface SharedState {
    actualSearch: null | string[] | unknown[]
    actualPartnerInSearch: null | Partners
}

const setInitialState: SharedState = {
    actualSearch: null,
    actualPartnerInSearch: null
}

export let state = setInitialState

export const updateState = ( data: SharedState ) => {
    state = data 
}

export const SharedState = () => {
    return { ...state }
}



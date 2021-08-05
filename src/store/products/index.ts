import dataproducts from './data/dataSucursal1.json'

const initialState = {
    datap: dataproducts,    // datap: [],
}

const reducerList = (prevState = initialState, action: { payload: any, type: string }) => {
    switch (action.type) {
        case 'PRODUCT_CREATE':
            return {
                datap: [...prevState.datap, action.payload]
            }
        case 'PRODUCT_DELETE':
            return {
                datap: prevState.datap.filter((p: any)=> p.id !== action.payload),
            }
        case 'PRODUCT_UPDATE':
            return {
                datap: prevState.datap.map((p: any)=> {
                    if (p.id === action.payload.id) return action.payload
                    return p
                }),
            }
        default:
            return prevState
    }
}

export default reducerList

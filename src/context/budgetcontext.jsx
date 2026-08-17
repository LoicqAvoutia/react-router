import { useEffect, useState, createContext, useContext, Children} from 'react';

const Budgetcontext = createContext();
export const usebudget = () => useContext(Budgetcontext);

export const Budgetcomponent = ({children}) => {
    const [budget,setbudget] = useState(undefined);
    const data = {
        budget : budget,
        setbudget : setbudget
    };
    return(
    <Budgetcontext value={data}>
        {children}
    </Budgetcontext>
    )
}
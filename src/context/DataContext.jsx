import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }, delData) => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState();

    useEffect(() => {
        axios.get('https://matrixacademylessonapi.webluna.org/category',
            { headers: { 'matrix-access ': '3fa3afc2aa0e5e2c1c17ee83f4c8fc76' } })
            .then((res) => {
                setStatus(res.status);
                if (res.status === 200) {
                    setData(res.data)
                } else {
                    setData([]);
                }
            })
            .catch((err) => {
                setStatus(err.status);
            })
    }, [delData])

    return <DataContext.Provider value={[data, status]}>{children}</DataContext.Provider>
}
// import axios rom "axios";
import { useEffect, useState } from "react";





const useDataLoadHooks = () => {

    const [appData, setAppData] = useState([])

    useEffect(() => {
        fetch("/apps_al_ldata.json")
            .then(res => res.json())
            .then(data => {
                setAppData(data)
            })
    }, [])


    return appData
};

export default useDataLoadHooks;
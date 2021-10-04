import { useEffect, useState } from 'react';

const useData = () => {
    const [displayData, setDisplayData] = useState([]);
    useEffect(() => {
        fetch(`./service.JSON`)
            .then(res => res.json())
            .then(data => setDisplayData(data))
    }, [])
    return [displayData, setDisplayData]
};

export default useData;

/* {
    displayData.map(singleData => <h4>{singleData.name}</h4>)
} */
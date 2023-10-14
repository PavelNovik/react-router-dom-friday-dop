import React, {useEffect} from 'react';
import {Navigate, useNavigate} from "react-router-dom";

export const Error404 = () => {
    const location = useNavigate()
    useEffect(() => {
        location('/page/Error404')
        // console.log(location)

    }, [location])
    return (
        <div>
            Error404
            {/*{<Navigate to={'/page/Error404'}/>}*/}
        </div>
    );
};


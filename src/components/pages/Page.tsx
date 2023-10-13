import React from 'react';
import {PagesType} from "../../data/dataState";
import {useLocation, useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
    pages: PagesType[]
}
const Page: React.FC<PropsType> = ({pages}) => {
    const params = useParams()
    const location = useLocation()
    console.log(location)

    return (
        <div>
            {location.pathname==='/page/0' && <div>SECRET TEXT</div>}
            {pages[Number(params.id)] ? <div>
                {pages[Number(params.id)].heading}
                {pages[Number(params.id)].about}
            </div> : <Error404/> }

        </div>
    );
};

export default Page;
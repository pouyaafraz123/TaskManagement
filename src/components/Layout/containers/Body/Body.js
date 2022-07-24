import React, {useState} from "react";
import Top from './Top';
import BodyContainer from './BodyContainer';

const Body = () => {
    const [search,setSearch] = useState("");
    const onSearchChange = (v)=>{
        setSearch(v);
    }
    return (
        <>
            <Top onSearchChange={onSearchChange}/>
            <BodyContainer s={search}/>
        </>
    );


}

export default Body;
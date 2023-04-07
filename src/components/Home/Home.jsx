import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TshirtCard from '../TshirtCard/TshirtCard';
import './Home.css';
const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div className='tshirt-container'>
            
            {
                tshirts.map( tshirt => <TshirtCard
                key={tshirt._id}
                tshirt={tshirt}
                ></TshirtCard>)
            }

        </div>
    );
};

export default Home;
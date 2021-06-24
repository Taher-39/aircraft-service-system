import React from 'react';
import londonImg from '../../../Imgs/london.jpg';
import Delhi from '../../../Imgs/Delhi.jpg';
import Dubai from '../../../Imgs/dubai.jpg';
import Chittagong from '../../../Imgs/chittagaon.jpg';
import FlightRoutesCard from './FlightRoutesCard'
const FlightRoutes = () => {
    const FlightRoutesData = [
        {
            id: 1,
            FlightImg: londonImg,
            businessClassPrice: '$15041',
            economyClassPrice: '$12041',
            from: 'Dhaka',
            to: 'London',
        },
        {
            id: 2,
            FlightImg: Delhi,
            businessClassPrice: '$750',
            economyClassPrice: '$550',
            from: 'Dhaka',
            to: 'Delhi',

        },
        {
            id: 3,
            FlightImg: Chittagong,
            businessClassPrice: '$550',
            economyClassPrice: '$300',
            from: 'Dhaka',
            to: 'Gao',
        },
        {
            id: 4,
            FlightImg: Dubai,
            businessClassPrice: '$980',
            economyClassPrice: '$700',
            from: 'Dhaka',
            to: 'Dubai',
        }
    ]
    return (
        <div>
            <div className="container my-5">
                <h2 className='text-secondary'>Top Flight Routes</h2>
                <div className="row">
                    {
                        FlightRoutesData.map(route => <FlightRoutesCard route={route} key={route.id}></FlightRoutesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FlightRoutes;
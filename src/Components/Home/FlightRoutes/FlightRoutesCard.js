import React from 'react';
import { useHistory } from 'react-router-dom';

const FlightRoutesCard = (props) => {
    const { FlightImg, businessClassPrice, economyClassPrice, from, to, id} = props.route;
    const history = useHistory()
    const handleBuyTickets = (id) => {
        history.push(`/getTickets/${id}`)
    }
    return (
        <div className="col-md-4 col-sm-12 col-xl-3 d-flex justify-content-center my-4" style={{height: '100%'}}>
            <div>
                <img style={{ height: '300px', width: '270px' }} src={FlightImg} alt="" />
                <div className="description text-center p-3 bg-secondary text-white">
                    <h3>{from} to {to}</h3>
                    <p>Business Class Price: {businessClassPrice}</p>
                    <p>Economy Class Price: {economyClassPrice}</p>
                    <div className="row d-flex justify-content-around">
                        <button className="btn btn-color text-light my-2" onClick={() => handleBuyTickets(id)}>Business Class</button>
                        <button className="btn btn-color text-light" onClick={() => handleBuyTickets(id)}>Economy Class</button>
                        {/* onClick={() => handleBuyProduct(_id)}  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightRoutesCard;
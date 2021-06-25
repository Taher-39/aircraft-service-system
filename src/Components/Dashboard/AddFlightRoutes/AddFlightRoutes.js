import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddFlightRoutes = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [serviceInfo, setServiceInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = e => {
        const newServiceInfo = { ...serviceInfo }
        newServiceInfo[e.target.name] = e.target.value;
        setServiceInfo(newServiceInfo)
    }
    const handleChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file)
        formData.append('serviceFrom', serviceInfo.startPlace)
        formData.append('serviceTo', serviceInfo.destinationPlace)

        fetch('http://localhost:4000/addARoutes', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Service Added Successfully')
                }
            })
            .catch(error => {
                console.error(error)
            })
    };
    
    return (
        <div>
            <div className="aside">
                <Sidebar></Sidebar>
            </div>
            <div className="main">
                <div className="d-flex justify-content-between">
                    <div><h1 className='text-center text-color'>Add Flight Routes</h1></div>
                    <div><h6 className='text-color'>Welcome as a Admin {loggedInUser.name}</h6></div>
                </div>
                <div className="flight-routes">
                    <form className='p-3' onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="startPlace">Start From</label>
                            <input onBlur={handleBlur} type='text' placeholder="Flight Start Place name *" name='startPlace' className='form-control w-50' id="startPlace" required />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="EndPlace">End Point</label>
                            <input onBlur={handleBlur} type='text' placeholder="Destination Name *" name='destinationPlace' className='form-control w-50' id='EndPlace' required />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="file">Input Image</label><br />
                            <input onChange={handleChange} type='file' className='w-50' id='file' required />
                        </div>

                        <div className="form-group text-right">
                            <button className="btn btn-color text-light" type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFlightRoutes;
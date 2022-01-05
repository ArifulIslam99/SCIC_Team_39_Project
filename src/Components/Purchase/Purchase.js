import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Purchase.css'

const Purchase = () => {

    const { purchaseId } = useParams();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/dashboard/myorders';
    const { user } = useAuth();
    console.log(user);
    const [bookings, setBookings] = useState({});
    useEffect(() => {
        fetch(`http://secret-garden-17818.herokuapp.com/products/${purchaseId}`)
            .then(res => res.json())
            .then(data => setBookings(data))
        // 

    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://secret-garden-17818.herokuapp.com/allorders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Successfully Done');
                    reset();
                    history.push(redirect_url)
                }
            })

    }
    if(!bookings){return <Spinner animation="grow" />}
    return (
        <div className='Add-Booking'>
              <h2 className='fw-bold text-warning'>Confirm Your Booking</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {user.displayName &&
                    <input readOnly={true}{...register("name", { required: true, maxLength: 50 })} value={user.displayName} />
                }
                <br />
                <input {...register("email", { required: true, maxLength: 50 })} placeholder="Email" value={user.email} />
                 <br /> 
                 <input readOnly={true} {...register("price")} defaultValue={bookings.productPrice} />
                <br />

                {bookings.productImg && <input readOnly={true} {...register("img")} defaultValue={bookings.productImg} />}
                <br />
      
                <input className="pending" {...register("status", { required: true, maxLength: 51 })} placeholder="Status" value="Pending" />
                <br />
                
                {bookings.productName &&
                    <input readOnly={true} {...register("productName", { required: true })} value={bookings.productName} />}

                <br />
                <input type='text' {...register("Address", { required: true, maxLength: 50 })} placeholder="Full Address" />
                <br />
                <input type='number' {...register("phoneNumber", { required: true, maxLength: 13 })} placeholder="Phone Number" />
                <br />
                <input className='btn btn-warning w-25' type="submit" />
                <br />
            </form>
        </div>
    );
};

export default Purchase;
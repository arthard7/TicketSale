import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";

const FullTicket: React.FC = () => {
    const {id} = useParams()
    const [ticket, setTicket] = useState<{
        imageUrl: string,
        title: string,
        price: number
    }>()

    useEffect(() => {
        async function fetchTicket() {
            try {
                const {data} = await axios.get('https://64baabff5e0670a501d68343.mockapi.io/Items/' + id)
                setTicket(data)
            } catch (error) {
                alert('error i am sorry')
            }
        }

        fetchTicket()
    }, [])


    if (!ticket) {
        return <>
            'загрузка...'
        </>
    }


    return (
        <div>
            <img src={ticket.imageUrl}/>
            <h1> {ticket.title} </h1>
            <h4> {ticket.price}</h4>


            <Link to={'/'}>
                <div className="button button--outline button--add">

                    <span>Return</span>
                </div>
            </Link>


        </div>
    );
};

export default FullTicket;
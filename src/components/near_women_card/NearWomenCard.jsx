import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const NearWomenCard = (props) => {
    return (
        <>

            <div className="card Mencard" style={{ width: '18rem', display: 'inline-block' }}>
                <img className="card-img-top" src={props.img} alt="..." />
                <div className="card-body">

                    <div className='container card-title'>
                        <div className='row'>
                            <div className='col-6 h5'>{props.title}</div>
                            <div className='col-6 prize'>$8000</div>
                        </div>
                    </div>

                    <p className="card-text">{props.data}</p>
                    <Link to='/addcard' className="btn btncolor"><ShoppingBasketIcon fontSize='small'/> Add To Card</Link>
                </div>
            </div>
        </>
    )
}

export default NearWomenCard
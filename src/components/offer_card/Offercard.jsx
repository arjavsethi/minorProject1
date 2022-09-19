import React, {useState} from 'react'
import Editoffer from "../editoffer/Editoffer";
import './offercard.scss'

const Offercard = (props) => {
	const [off, setoff] = useState(false);
    return (
        <>
            <div className="card offercard" style={{ width: '18rem', display: 'inline-block' }}>
                <img className="card-img-top" src={props.img} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.data}</p>
                    <button  className="btn btn-primary" onClick={()=>setoff(true)}>edit</button>
                    <button  className="btn btn-dark">delete</button>


                    {off ? <Editoffer

                        fun={setoff}
                        img={props.img}

                    /> : null}
                </div>
            </div>
        </>
    )
}

export default Offercard
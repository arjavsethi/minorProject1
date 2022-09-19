import React, {useState} from 'react'
import './specialistcard.scss'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Editspecialist from '../editspecialist/Editspecialist';


const Specialistcard = (props) => {

    const [spc, setspc] = useState(false);

    return (
        <>

            <div className=' content'>
                <img id='img' src={props.img} alt="" />
                <h5>{props.name}</h5>
                <p id='p1'>{props.data}</p>
                <button className='btn btn-outline-primary' onClick={()=>setspc(true)}><EditIcon /></button>
                <button className='btn btn-outline-dark'><DeleteIcon /></button>


                {spc ? <Editspecialist

                    fun={setspc}
                    img={props.img}

                /> : null}

            </div>
        </>
    )
}

export default Specialistcard
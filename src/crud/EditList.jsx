import axios from 'axios';
import React, { useContext, useRef } from 'react'
import { Link, useParams } from 'react-router';
import { DataContext } from '../context/DataContext';

const EditList = () => {
    const { editid } = useParams();
    const [data] = useContext(DataContext);
    const selectedData = data.find(p => p._id === editid);
    const updateRowRef = useRef();
    const updateInputAzRef = useRef();
    const updateInputRuRef = useRef();
    const updateInputEnRef = useRef();

    const sumbitedForm = (e) => {
        e.preventDefault();
        axios.put(`https://matrixacademylessonapi.webluna.org/ad/category/${selectedData._id}`, {
            'row': updateRowRef.current.value,
            'titleAz': updateInputAzRef.current.value,
            'titleEn': updateInputEnRef.current.value,
            'titleRu': updateInputRuRef.current.value
        }, { headers: { 'matrix-access ': '3fa3afc2aa0e5e2c1c17ee83f4c8fc76' } })
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    return (
        <div className='d-flex flex-column align-items-center'>
                <form onSubmit={sumbitedForm} className='col-4 my-5'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Row</label>
                        <input ref={updateRowRef} defaultValue={selectedData&&selectedData.row} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">titleAz</label>
                        <input ref={updateInputAzRef} defaultValue={selectedData&&selectedData.titleAz} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">titleEn</label>
                        <input ref={updateInputEnRef} defaultValue={selectedData&&selectedData.titleEn} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">titleRu</label>
                        <input ref={updateInputRuRef} defaultValue={selectedData&&selectedData.titleRu} type="text" className="form-control" />
                    </div>
                    <Link to={'/'} className="btn btn-outline-dark">Back to Page</Link>
                    <button type="submit" className="btn btn-dark mx-3">Edit</button>
                </form>
          
        </div>
    )
}

export default EditList
import axios from 'axios';
import React, { useRef } from 'react'
import Swal from 'sweetalert2';

const AddList = () => {
    const rowRef = useRef();
    const inputAzRef = useRef();
    const inputEnRef = useRef();
    const inputRuRef = useRef();

    const sumbitedForm = (e) => {
        e.preventDefault();

        axios.post('https://matrixacademylessonapi.webluna.org/ad/category', {
            'row': rowRef.current.value,
            'titleAz': inputAzRef.current.value,
            'titleEn': inputEnRef.current.value,
            'titleRu': inputRuRef.current.value
        }, { headers: { 'matrix-access ': '3fa3afc2aa0e5e2c1c17ee83f4c8fc76' } })
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: "Success",
                        text: "Item added!",
                        icon: "success"
                    })
                    rowRef.current.value = "";
                    inputAzRef.current.value = "";
                    inputRuRef.current.value = "";
                    inputEnRef.current.value = "";
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='d-flex flex-column align-items-center'>
            <form onSubmit={sumbitedForm} className='col-4 my-5'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Row</label>
                    <input required ref={rowRef} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">titleAz</label>
                    <input required ref={inputAzRef} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">titleEn</label>
                    <input required ref={inputEnRef} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">titleRu</label>
                    <input required ref={inputRuRef} type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-dark">Add</button>
            </form>
        </div>
    )
}

export default AddList
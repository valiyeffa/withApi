import axios from 'axios'
import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2';
import { DataContext } from '../context/DataContext';
import { Link } from 'react-router';

const List = () => {
    const [data, status] = useContext(DataContext);
    const [delData, setDelData] = useState();
    
    const deleteData = (id) => {
        axios.delete(`https://matrixacademylessonapi.webluna.org/ad/category/${id}`,
            { headers: { 'matrix-access ': '3fa3afc2aa0e5e2c1c17ee83f4c8fc76' } })
            .then((res) => {
                if (res.status === 200) {
                    setDelData(res.data)
                } else {
                    setDelData([]);
                }
            })
            .catch((err) => console.log(err.status))
    }

    return (
        <div className='d-flex justify-content-center'>
            {status === 200 ? <div className='col-4 m-3'>
                <p className='alert alert-success'>Success</p>
                <ul className="list-group">
                    {data.map(item => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={item._id}>
                            {item.titleAz}
                            <div className='d-flex gap-2'>
                                <Link to={`/${item._id}`} className='btn btn-warning'>Edit</Link>

                                <button onClick={() => {
                                    deleteData(item._id);
                                    Swal.fire({
                                        title: "Success",
                                        text: "Item deleted!",
                                        icon: "success"
                                    })
                                }} className='btn btn-danger'>Del</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div> : status === 401 ? <p className='alert alert-danger'>No Access</p> : <p className='alert alert-warning'>Loading...</p>}
        </div>
    )
}

export default List
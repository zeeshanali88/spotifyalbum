import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
const FormModal = ({selectedAlbum}) => {
    const [note,setNote]=useState('');
    const [loading,setLoading]=useState(false)
    const addNoteHandler=(e)=>{
        e.preventDefault();
        if(!note){
            Swal.fire(
                'Fail!',
                'Please type your note!',
                'error'
              )
              return
        }
        setLoading(true)
        const headers={
        "Content-type": "application/json; charset=UTF-8" }

        axios.post('https://jsonplaceholder.typicode.com/posts',
        {title:'title',body:note,userId:1},
        {headers:headers}
        )
        .then((response)=>Swal.fire(
            'Success!',
            'Your note created!',
            'success'
          )&&setLoading(false))
        .catch((err)=>Swal.fire(
            'Fail!',
            `${err.message}`,
            'error'
          ))

    }
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form onSubmit={addNoteHandler}>
                    <div className="form-floating">
                    <textarea className="form-control"
                    value={note}
                    onChange={e=>setNote(e.target.value)}
                     placeholder="Leave a comment here" 
                     id="floatingTextarea2" 
                     style={{height: '100px'}}></textarea>
                    <label >Note</label>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                    <button type="submit" disabled={loading} className="btn btn-secondary">Save changes</button>
                </div>
                </form>
                </div>
                
                </div>
            </div>
            </div>
        </div>
    )
}

export default FormModal

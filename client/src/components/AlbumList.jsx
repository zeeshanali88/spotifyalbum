import React ,{useState} from 'react'
import Modal from './FormModal' 
import './AlbumListStyle.css'
const AlbumList = ({allAlbums}) => {
    const [selectedAlbum,setSelecteAlbum]=useState(0)   
    return (
        <div className="album-cards">
            {
                allAlbums.map((album)=>{
                    return <div className="card m-2" style={{width: "18rem"}} key={album.id}>
                        <img alt={album.name} className="card-img-top" src={album.images[0].url} />
                        <div className="card-body">
                            <h5 className="card-title">{album.name}</h5>
                            <p className="card-text">{album.label}</p>
                            <button type="button" onClick={()=>setSelecteAlbum(album.id)} className="btn btn-outline-secondary text-hover add-note-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Add Note
                            </button>
                        </div>
                    </div>
                })
            }
            <Modal selectedAlbum={selectedAlbum}/>
        </div>
    )
}

export default AlbumList

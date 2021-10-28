import React, {useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Swal from 'sweetalert2';

import axios from 'axios'
import AlbumList from './components/AlbumList';
function App() {

  const [albums,setAlbums]=useState([])
    const [loading,setLoading]=useState(false)
    const fetchAlbums=()=>{
      setLoading(true)
        const headers={
            "Accept": "application/json" ,
            'Content-Type': "application/json" ,
            "Authorization": "Bearer BQAMZBE8inD5GlK00Z2I_-0mYGC1PLb4uXIJzhKeaFp43DDRNq3nn6tnwJfmowOPCjPNDXr16ckYaEcpTvCT9QDBhJ6nxmjGU9d0UBCIq2Ce5by3CnJXWR8HGlhMP8xajmnQJ2JmpfLRu7-CyyvXbuvv5FzSHnrCei8q"}
        const url='https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES'
            
        axios.get(url,{headers:headers})
        .then((response)=>{
            setAlbums(response.data.albums)
            setLoading(false)
        })
        .catch((err)=>Swal.fire(
          'Fail!',
          `${err.message}`,
          'error'
        ))

        
    }

    useEffect(()=>{
        fetchAlbums()
    },[])

  return (
    <div className="d-flex justify-content-center align-items-center"  >
      {
        !loading?<AlbumList allAlbums={albums}/>:'Loading...'
      }
    </div>
  );
}

export default App;

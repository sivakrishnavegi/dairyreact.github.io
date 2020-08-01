import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { MDBInput, MDBBtn } from 'mdbreact'
import "firebase/database";
import "firebase/auth";

import firebase from 'firebase'

export const NameData = ({i}) => {
    const[name,setName] = useState(i.name)
  

    const updateHandler = () =>{
        const db =firebase.firestore()
        db.collection('queries').doc(i.id).set({...i,name})
    }
   
    
    

    return (
        <>
       
    
          
             <MDBInput
            value={name}
            onChange={  e => { setName(e.target.value) }  }
            />
            <MDBBtn
            className="btn btn-danger btn-rounded btn-sm my-0"
             type="submit"
            onClick={updateHandler}>update</MDBBtn>
         
   
    
      </>
      
        
       
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NameData)

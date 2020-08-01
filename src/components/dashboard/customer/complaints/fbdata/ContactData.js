import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { MDBInput, MDBBtn } from 'mdbreact'
import "firebase/database";
import "firebase/auth";

import firebase from 'firebase'

export const ContactData = ({i}) => {
    const[email,setEmail] = useState(i.email)
  

    const updateHandler = () =>{
        const db =firebase.firestore()
        db.collection('queries').doc(i.id).set({...i,email})
    }
    

    return (
        <div>
          
            <MDBInput
            value={email}
            onChange={  e => { setEmail(e.target.value) }  }
            />
            <MDBBtn
            className="btn btn-danger btn-rounded btn-sm my-0"
             type="submit"
            onClick={updateHandler}>update</MDBBtn>
        
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData)

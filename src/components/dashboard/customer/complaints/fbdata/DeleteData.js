import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { MDBInput, MDBBtn } from 'mdbreact'
import "firebase/database";
import "firebase/auth";
import 'antd/dist/antd.css'; 
import firebase from 'firebase'
import { Button, notification, Space ,message} from 'antd';

export const DeleteData = ({i}) => {
  

    const  DeleteHandler = async  () =>{
        const db =firebase.firestore()
        db.collection('queries').doc(i.id).delete()
        message.loading({ content: 'Loading...', key });
     await setTimeout(() => {
          message.success({ content: 'document deleted refresh the page!', key, duration: 50,style: {
              marginTop: '20vh',
            }, });
        }, 1000);
    }
   
    
    const key = 'updatable';


  
    return (
        <>
       
    
          
          
            <MDBBtn
            color="danger"
            className="btn-sm my-0"
             type="submit"
            onClick={DeleteHandler}>Delete</MDBBtn>
      

      </>
      
        
       
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteData)

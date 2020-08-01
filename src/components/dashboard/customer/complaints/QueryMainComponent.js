import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import firebase, { firestore } from 'firebase'
import {createFirestoreInstance,reduxFirestore, getFirestore} from 'redux-firestore'
import { getFirebase} from 'react-redux-firebase'
import MaterialTable from 'material-table';
import "firebase/database";
import "firebase/auth";
import { MDBContainer, MDBBtn } from 'mdbreact'
import NameData from './fbdata/nameData'
import EmailData from './fbdata/EmailData'

import NumbertData from './fbdata/NumberData'
import QuerytData from './fbdata/QueryData'
import DeleteData from './fbdata/DeleteData'
import QueryStatus from './fbdata/QueryStaus'
const QueryMainComponent=()=> {

    const [fbdata, setData] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("queries").get()
            setData(data.docs.map(doc => ({...doc.data(),id :doc.id})))

        }
        fetchData()
    },[])
   
    const deleteHandler = (i) =>{
        console.log("delete handler ...:)")
        const db =firebase.firestore()
        db.collection('queries').doc(i.id).delete()
    }
   

 
    return (
        
        <div className="">
            <br                      />
            <MDBContainer className="my-5 mt-5 pt-5">
         
<div className="card">
  <h3 className="card-header text-center font-weight-bold text-uppercase py-4">Maintain Queries</h3>
  <div className="card-body">
    <div id="table" className="table-editable">
    
      <table className="table table-bordered table-responsive-md table-striped text-center">
        <thead>
          <tr>
            <th className="text-center">Person Name</th>
            <th className="text-center">Email</th>
            <th className="text-center">Contact no</th>
            <th className="text-center">Query</th>
            <th className="text-center">Status</th>
            <th className="text-center">delete</th>
          </tr>
        </thead>
        <tbody>
        { fbdata.map( i => {
       
          return(
              <>
         
            <tr key={i.id}>
          <td >
           <NameData i={i}/>
          </td>

          <td><EmailData i={i}/></td>
        
          <td><NumbertData i={i}/></td>
          <td><QuerytData i={i}/></td>
          <td><QueryStatus i={i}/></td>
          <td><br  /><br  />
          <DeleteData i={i}/></td>


            </tr>
          
            </>
          )
         

      })}
         
    </tbody>
      </table>
    </div>
  </div>
</div>

            </MDBContainer>
       
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("state"+ "" +state)
     return{
         auth : state.firebase.auth,
         complaints : state.firestore.ordered.queries
     } 
 }
 
 const mapDispatchToProps = {
     
 }
 
 export default compose(connect(mapStateToProps),firestoreConnect([
     {
         collection : 'queries'
     }
 ]))(QueryMainComponent)
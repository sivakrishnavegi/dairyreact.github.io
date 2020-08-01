import React from 'react'
import { connect } from 'react-redux'
import {firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import {MDBListGroup,MDBListGroupItem,MDBBadge} from 'mdbreact'



const  viewQuery= (props)=> {
    const { complaints ,auth } = props
    return (
        <div className="my-5 p-5">
                      

    <div id="table" className="table-editable my-5 m-5" >
    
      <table className="table table-bordered table-responsive-md table-striped text-center">
        <thead>
          <tr>
            <th className="text-center">Person Name</th>
            <th className="text-center">Email</th>
            <th className="text-center">Contact no</th>
            <th className="text-center">Query</th>
            <th className="text-center">status</th>
          </tr>
        </thead>
        <tbody>
          
                        { complaints && complaints.map(complaint =>{
                                    return (
                                      <tr>
                                         <td>{complaint.name}</td>
                                         <td>{complaint.email}</td>
                                         <td>{complaint.number}</td>
                                         <td>{complaint.query}</td>
                                    <td><MDBBadge>{complaint.status}</MDBBadge></td>
                                      </tr>
                                    
                                   
                                    )
                                })}
           
                        
                            </tbody>
                            </table>
                            </div>
                           
                            
                               
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
]))(viewQuery)
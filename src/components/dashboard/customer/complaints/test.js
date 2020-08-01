import React, { Component } from 'react'
import { connect } from 'react-redux'
import {firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import firebase, { firestore } from 'firebase'
import {createFirestoreInstance,reduxFirestore, getFirestore} from 'redux-firestore'
import { getFirebase} from 'react-redux-firebase'
import MaterialTable from 'material-table';
import "firebase/database";
import "firebase/auth";
import { MDBBtn,MDBListGroup,MDBDataTable,MDBCol,MDBListGroupItem,MDBBadge,MDBInput,MDBIcon,MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBContainer, MDBTable } from 'mdbreact';

 class test extends Component {
     
  constructor(props) {
      super(props)
  
      this.state = {
          disabled : true,
          modal: false
           
      }
      this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange = (e) => {
    console.log(e)
    this.setState({
        [e.target.id] : e.target.value
    })
}
    render() {
      
        const { complaints ,auth } = this.props
        const db = getFirestore();
        const dbs= ()=>{
            const firestore = getFirestore();
            firestore.collection('newtest').add({
                name :"ashwin",
                id :"1"
            })
         }
        
         const ups = ()=> {
            const firestore = getFirestore();
            firestore.collection("cities").doc("LA").set({
                name: "ghkhhk Angeles",
                state: "CA",
                country: "USA"
            })

         }

         const update = ()=> {
            db.collection("cities").doc("LA").update({
                name : "shiva"
            });
         }

        const search = () => {

        const citiesRef = db.collection('cities');
            

        citiesRef.doc('LA').set({
            name: 'sri maha',
          
          });
  
        }
          
        const vsk =()=> {
            var userId = firebase.auth().currentUser.uid;
            console.log("userid is : "+userId)

        }
       
        const docGet = () => {
            db.collection("cities").doc("LA")
                .get()
                .then(function(doc) {
                    if (doc.exists) {

                    const data = doc.data()
                    console.log("Document data:", doc.data());
                    } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                    }
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
        }
   
        const del =()=> {
            db.collection('cities').doc('LA').delete();
        }
        
      
   
        return (
            <div className="my-5 p-5">
                <div className="my-5 p-5">
                  <MDBListGroup >
                        { complaints && complaints.map(complaint =>{
                            const uid = complaint.id
                              const updateName = ()=>{
                                const z = complaint.id
                                const nmz = document.getElementById("name").value
                                
                                console.log("hello bro id is"+z) 
                                db.collection("queries").doc(z).update({
                                    name : nmz
                                });

                                this.setState({disabled : !this.state.disabled})

                            }
                             

                            const deleteName = ()=>{
                                const z = complaint.id
                                console.log("hello bro id is deleted"+z) 
                                db.collection("queries").doc(z).delete()
                    
                            }
                              
                           async function filter(){
                            const uid = complaint.id
                            const snapshot = await db.collection('queries').where('name', '==', 'ashwin').get();
                            snapshot.forEach(doc => {
                              console.log(doc.id, '=>', doc.data());
                            });

                           }

                          
                           async function setDocument(db) {
                            // [START set_document]
                            const data = {
                              name: 'Los Angeles',
                              state: 'CA',
                              country: 'USA'
                            };
                          
                            // Add a new document in collection "cities" with ID 'LA'
                            const res = await db.collection('cities').doc('LA').set(data);
                            // [END set_document]
                          
                            console.log('Set: ', res);
                          }
                             
                             async function getdoc() {
                               
                                const snapshot = await db.collection('queries').get();
                                snapshot.forEach(doc => {
                                    console.log(doc.id, ' => ', doc.data());
                                  });
    
                            }
                            const toggle = () => {
                                this.setState({
                                  modal: !this.state.modal
                                });
                              }
                           
                          
                                    return (
                                      
                                     <div>
                                            
                                      <MDBContainer md="6">
                                      <MDBListGroupItem hover href="#" key={complaint.id} >
                                    <div className="d-flex w-100 justify-content-between">
                                      <MDBRow>
                                          <MDBCol md="8" className="text-align-center">
                                    <h1>{complaint.query}</h1>
                                          </MDBCol>
                                          <MDBCol md="4" className="pl-5 text-justify">
                                    <small>{complaint.number}</small> <br />
                                    <small>{complaint.email}</small> <br />
                                    <small>{complaint.name}</small>
                                          </MDBCol>
                                      </MDBRow>
                                      
                                    </div>
                                    <MDBModal isOpen={this.state.modal} toggle={toggle}>
                              <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
                              <MDBModalBody>
                             <p>{complaint.name}</p>
                              </MDBModalBody>
                              <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
                                <MDBBtn color="primary" onClick={getdoc}>Save changes</MDBBtn>
                              </MDBModalFooter>
                            </MDBModal> 
                                           
                                    { this.state.disabled === true ? ( null
   
                                        ) : (
                                            <form > 
                                            <span className="product-remaining">{this.state.disabled} 
                                             <MDBInput
                                            disabled={this.state.disabled}
                                            label="enter new name"
                                            onfocus="this.value=''"
                                            onChange={this.handleChange}
                                            group type="email" id="name"
                                            validate error="wrong"
                                            dark="right"
                                            /></span>
                                        </form>
                                        )}
                                                                                 
                                               
                          
                                    <MDBBtn color="primary"
                                           onClick={filter}
                                               pill>edit</MDBBtn>
                                             
                                        <MDBBtn color="primary"
                                              onClick={updateName}
                                               pill>UPDATE</MDBBtn>
                                         <MDBBtn color="primary"
                                              onClick={deleteName}
                                               pill>DELETE</MDBBtn>
                                             
                                    </MDBListGroupItem>
                                    
                                      </MDBContainer>

                                    

                                    </div>
                                    )
                                })
                        }
                        
                   </MDBListGroup>
                   
                   <br       />


                 </div>
              </div>
        )
    }
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
 ]))(test)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createQuery } from '../../../../store/actions/raiseQuery/raiseQueryActions'
import { Redirect } from 'react-router-dom'
import { MDBNotification, MDBContainer } from "mdbreact";
import { MDBInput, MDBBtn} from 'mdbreact'
import firebase from 'firebase'

import { Button, notification, Space ,message} from 'antd';
import 'antd/dist/antd.css'; 

function writeUserData(userId, name, email, imageUrl) {
   
    firebase.database().ref('users/' + userId).set({
      username: "aditya"
    });
  }

class raiseComplaint extends Component {
 constructor(props) {
     super(props)
 
     this.state = (
          {  name : '',
            email : '',
            number:'',
            query:' '
         },
         { status : 'unresolved'}
     )
 }
 
 handluserNameChange = (e) => {
     console.log(e)
     this.setState({name: e.target.value});
 }
 handluserEmailChange = (e) => {
    console.log(e)
    this.setState({email: e.target.value});
}
handluserNoChange = (e) => {
    console.log(e)
    this.setState({number: e.target.value});
}
handluserQueryChange = (e) => {
    console.log(e)
    this.setState({query: e.target.value});
}
 handleSubmit = async (e) => {
    // console.log(e)
    e.preventDefault();
    // console.log(this.state)
    this.props.createQuery(this.state)
    const key = 'updatable';
    message.loading({ content: 'Loading...', key });
    await setTimeout(() => {
         message.success({ content: 'Query raised sucessfully', key, duration: 50,style: {
             marginTop: '20vh',
           }, });
       }, 1000);
}


    render() {
        // const { auth } = this.props;
        //const { status } = this.props
        // if(!auth.uid) return <Redirect to='/signin' />
        const { status } = this.props
        return (
            
            <div className="container my-5 text-align-center col-md-4">
                <MDBContainer>
                    <br          />
                    <br          />
                    <br          />
                    <br          />
                <form  className="white my-5" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Raise Query</h5>
                    <div className="grey-text">
                    <MDBInput label="full name"  value={this.state.name} onChange={this.handluserNameChange}  group type="text" id="name"  validate error="wrong"
                        dark="right" />
                    <MDBInput label="email"  value={this.state.email} onChange={this.handluserEmailChange} group type="email" id="email"  validate error="wrong"
                        dark="right" />
                    <MDBInput label="contact no"  value={this.state.number} onChange={this.handluserNoChange} group type="number"   id="number" validate error="wrong"
                    success="right"/>
                      <MDBInput label="your query..." value={this.state.query}  onChange={this.handluserQueryChange} group type="textarea"  id="query" validate error="wrong"
                    success="right"/>
                        
                        
                     </div>
                     
                    <div className="input-field">
                      <MDBBtn 
                      className="rounded btn skyblue lighten-1 z-depth-0 waves"
                      style={{borderRaidus :"30px"}} type="submit">submit</MDBBtn>
                    </div>
                </form>
               
                </MDBContainer>
          
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      
        status : state.query.status
    }
}

const mapDispatchToProps = (dispatch) => {
return {
   createQuery : (query)=> dispatch(createQuery(query))
}
}


export default connect(mapStateToProps,mapDispatchToProps)(raiseComplaint)
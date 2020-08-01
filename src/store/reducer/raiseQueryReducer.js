
import React, { Component } from "react";
import { MDBNotification,MDBContainer } from "mdbreact";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
 
const initState ={
    queries :[
        {  name : '', email : '', number:'', query:' ' }
    ],
    status :  null

   }


  export const raiseQueryReducer = (state=initState,action) => {
       
       switch(action.type){
           case 'CREATE_QUERY':
               console.log('created query sucessfully',action.query);
               return{
                    ...state,
                    status : 'query raised sucessfully'
                 };
           case 'CREATE_QUERY_ERROR':
               console.log('query  error', action.err);
               return state;
           default:
               return state;
       } 
      
   }
   
   export default raiseQueryReducer;
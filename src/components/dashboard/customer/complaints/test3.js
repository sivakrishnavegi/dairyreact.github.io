import React,{useState,Component} from 'react';
import { connect } from 'react-redux'
import {firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import firebase, { firestore } from 'firebase'
import {createFirestoreInstance,reduxFirestore, getFirestore} from 'redux-firestore'
import { getFirebase} from 'react-redux-firebase'
import "firebase/database";
import "firebase/auth";
import MaterialTable from 'material-table';
import {MDBDataTable, MDBContainer,MDBBtn} from 'mdbreact';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { forwardRef } from 'react';
 
// import AddBox from '@material-ui/icons/AddBox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import Check from '@material-ui/icons/Check';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Clear from '@material-ui/icons/Clear';
// import DeleteOutline from '@material-ui/icons/DeleteOutline';
// import Edit from '@material-ui/icons/Edit';
// import FilterList from '@material-ui/icons/FilterList';
// import FirstPage from '@material-ui/icons/FirstPage';
// import LastPage from '@material-ui/icons/LastPage';
// import Remove from '@material-ui/icons/Remove';
// import SaveAlt from '@material-ui/icons/SaveAlt';
// import Search from '@material-ui/icons/Search';
// import ViewColumn from '@material-ui/icons/ViewColumn';


class MaterialTableDemo extends Component{
    
    constructor(props) {
        super(props)
  
        const db = getFirestore();
    
        this.state = {
       
            columns: [
                { title: 'Name', field: 'name' },
                { title: 'Surname', field: 'surname' },
                { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                {
                  title: 'Birth Place',
                  field: 'birthCity',
                  lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                },
              ],
              data: [
                { name: "zakir" , surname: 'Baran', birthYear: 1987, birthCity: 63},
                { name: "musain" , surname: 'Baran', birthYear: 1987, birthCity: 63},
                
              ]
        }
    
    }
    render(){
        const { complaints ,auth } = this.props
   
     
//   const tableIcons = {
//     Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//     Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//     Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//     DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//     Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//     Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//     FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//     LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//     NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//     ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//     SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//     ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//     ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
//   };

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
        return(
          
            <div>
                 
                
            <MDBContainer className="m-5 my-5 p-3">
                <br                                    />
                <br                                    />
                <br                                    />
  
             
                <MDBContainer>
                            <p>{}</p>
                </MDBContainer>
                
                {  complaints && complaints.map(complaint =>{ 
                    
                    
                    
                   return(
                    <div>

                    </div>
                )  })}
                {/* <MaterialTable
                    icons={tableIcons}
                      title="Editable Example"
                      columns={this.state.columns}
                      data={this.state.data}
                      editable={{
                          onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                
                              setTimeout(() => {
                                this.setState([...this.state.data, newData]);
                                
                                resolve();
                              }, 1000)
                            }),

                          onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                              setTimeout(() => {
                                const dataUpdate = [...this.state.data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                this.setState({data : [...dataUpdate]});
                  
                                resolve();
                              }, 1000)
                            }),
                        
                        }}>
                    
                    
        
                 
                {/* END OF MAP */}
                {/* </MaterialTable> */}
           </MDBContainer> 
           <MDBContainer className="p-5 my-5">
           <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
       
        {  complaints && complaints.map(complaint =>(
                    
            <TableRow key={complaint.id}>
              <TableCell component="th" scope="row">
                <MDBBtn>EDIT</MDBBtn>
                <MDBBtn>UPDATE</MDBBtn>
                <MDBBtn>DELETE</MDBBtn>
              </TableCell>
              <TableCell align="center">{complaint.name}</TableCell>
              <TableCell align="center">{complaint.email}</TableCell>
              <TableCell align="center">{complaint.query}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
           </MDBContainer>
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
 ]))(MaterialTableDemo)
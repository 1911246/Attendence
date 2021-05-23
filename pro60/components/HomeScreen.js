import * as React from 'react';
import {StyleSheet,View,TouchableOpacity, Text,Image} from 'react-native'
import db from '../Config'

class HomeScreen extends React.Component{

constructor(){
  super();
  this.state={
    all_students:[]
  }
}


getClass =async()=>{
var class_ref = await db.ref('/').on('value', data =>{
  var all_students = []
  var class_a = data.val().class_A;
   for(var i in class_a){
     all_students.push(class_a[i]);
   }
   all_students.sort(function(a,b){
     return a.roll_no-b.roll_no;
   });
   this.setState({all_students:all_students});
});
}

updateAttendence(roll_no,status){
  var id = '';
  if(roll_no <= 9){
    id = '0'+ roll_no;
  } else {
    id = roll_no;
  }

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;

var yyyy = today.getFullYear();
if(dd < 10){
  dd = '0' + dd;
}
if (mm < 10) {
  mm = '0'+ mm;
}
today = dd + '_' + mm + '_' + yyyy;
var ref_path = id
var class_ref = db.ref(ref_path);
class_ref.update({
  [today]: status,
});
}

componentDidMount(){
  this.getClass();
}

  render(){
    return(
      <View>

      <TouchableOpacity>
      
      </TouchableOpacity>


       <TouchableOpacity style={styles.button}
       onPress={() => this.props.navigation.navigate('SummaryScreen')}>
       <Text>Submit</Text>
       </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
     marginLeft:50,
     borderWidth:1,
     borderColor:'rgba(0,0,0,0.2)',
     alignItems:'center',
     justifyContent:'center',
     witdh: 50,
     height: 50,
     borderRadius: 100,
     marginTop:50,
     marginRight:50,
  },
})
  

export default HomeScreen
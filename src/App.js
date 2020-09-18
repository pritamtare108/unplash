import React, { Component,Fragment } from 'react';
import Axios from 'axios';
import Spinner from './Components/Spinner';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users:[],
            loading:false,
         };
    }
   async componentDidMount(){
        // console.log('componentdidmount exist here');
        // let response=await window.fetch('https://api.github.com/users');
        // console.log(response);
        // let json =await response.json();
        // console.log(json);

        let response= await Axios.get('https://api.github.com/users');
        this.setState({users:response.data,loading:true});
        }
    render() { 
       // let renderData=this.state.items.map(user=>{
            // return(
            //     <Fragment key={user.id}>
            //         <div className="userBlock">
            //     <img src={user.avatar_url} alt={user.name}/>
            //     <h1>{user.login}</h1>
            //     </div>
            //     </Fragment>
            // )
      //  })
      let {loading, users}=this.state;
      let GitUsers=users.map((users)=>{
          return(
            <Fragment key={users.id}>
               <div className="card">
               <img src={users.avatar_url} alt={users.name} className="card-img-top"/>
               <div className="card-body">
          <h4 className="display-5 font-weight-bold">{ users.login}</h4>
                   </div> 
                </div>  
            </Fragment>
          );
      });
        return ( 
            <Fragment>
                {loading ?(<section className="d-flex flex-wrap">{GitUsers}</section>):(<Spinner/>)}
            </Fragment>
         );
    }
}
 
export default App;
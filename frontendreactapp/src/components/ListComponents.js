import React, { Component } from "react";
import UserService from "../services/UserService";

class ListComponents extends Component{
    
    constructor(props)
    {
        super(props);
        this.state={
            users:[]
        }
        this.addUser=this.addUser.bind(this);
        this.editUser=this.editUser.bind(this);
        this.deleteUser=this.deleteUser.bind(this);
    }

    deleteUser(id)
    {
        UserService.deleteUser(id).then(res=>{
            this.setState({users:this.state.users.filter(user=>user.id!==id)});
        });
    }
    
    viewUser(id)
    {
        this.props.history.push(`/view-user/${id}`);
    }
    
    editUser(id)
    {
        this.props.history.push(`/add-user/${id}`);
    }

    addUser()
    {
        this.props.history.push('/add-user/_add');
    }

    componentDidMount()
    {
        UserService.getUsers().then((res) =>{
            this.setState({users: res.data});
        });
    }


    render()
    {
        return(
            <div>
                <h2 class="text-center">Feuji Users List </h2>
                <div className="row">
                    <button className="btn btn-warning text-center" onClick={this.addUser}> Add User </button>
                </div>   
                    <br/><br/>
                <div className="row">
                <table className=" table table- stripped">
                    <thead>
                        <tr>
                            <td class="text-center"> User Name </td>
                            <td class="text-center"> User Password </td>
                            <td class="text-center"> User Mail </td>
                            <td class="text-center"> Actions </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user=>
                                <tr key={user.id}>
                                    <td class="text-center">{user.uname}</td>
                                    <td class= "text-center">{user.pwd}</td>
                                    <td class= "text-center">{user.umail}</td>
                                    <td class= "text-center" >
                                    <button className="btn btn-success" onClick={()=>this.viewUser(user.id)} > View </button>

                                        <button className="btn btn-primary" onClick={()=>this.editUser(user.id)} > Update </button>
                                        <button className="btn btn-danger" onClick={()=>this.deleteUser(user.id)} > Delete </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
              </div>       
            </div>
        )
    }
}
export default ListComponents;
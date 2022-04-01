import React, { Component } from "react";
import UserService from "../services/UserService";

class CreateComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            id: this.props.match.params.id,
            uname:'',
            pwd:'',
            umail:''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeUserPasswordHandler = this.changeUserPasswordHandler.bind(this);
        this.changeUserMailHandler = this.changeUserMailHandler.bind(this);
        this.saveorUpdateUser = this.saveorUpdateUser.bind(this);
    }
    componentDidMount()
    {
        if(this.state.id ==='_add')
        {
            return
        }
        else
        {
            UserService.getUserById(this.state.id).then((res) =>{
                let user = res.data;
                this.setState({
                    uname: user.uname,
                    pwd: user.pwd,
                    umail: user.umail
                });
            });
        }
    }
    
    saveorUpdateUser=(u)=>
    {
        u.preventDefault();
        let user = {uname: this.state.uname, pwd: this.state.pwd, umail: this.state.umail};
        console.log('User =>' +JSON.stringify(user));

        if(this.state.id ==='_add')
        {
            UserService.createUser(user).then(res=>{  
                this.props.history.push('/users')
            });
        }
        else
        {
            UserService.updateUser(user, this.state.id).then(res => {
                this.props.history.push('/users');
            });
        }
    }

    changeUserNameHandler=(event)=>{
        this.setState({uname: event.target.value});
    }
    changeUserPasswordHandler=(event)=>{
        this.setState({pwd: event.target.value});
    }
    changeUserMailHandler=(event)=>{
        this.setState({umail: event.target.value});
    }

    cancel()
    {
        this.props.history.push("/users");
    }
    
    getTitle()
    {
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add User</h3>
        }
        else
        {
            return <h3 className="text-center">Update User</h3>
        }
    }

    render()
    {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        {
                            this.getTitle()
                        }
                    
                        <div class="card-body">
                            <form>
                                <div class="form-group"> 
                                    <label> user Name </label>
                                    <input placeholder="user Name" class="form-control" name="username"  value={this.state.uname} onChange={this.changeUserNameHandler} />
                                </div>
                                <div class="form-group"> 
                                    <label> User Password </label>
                                    <input placeholder="user Password" class="form-control" name="password"  value={this.state.pwd} onChange={this.changeUserPasswordHandler} />
                                </div>
                                <div class="form-group"> 
                                    <label> User Mail </label>
                                    <input placeholder="user Mail" class="form-control" name="emailId"  value={this.state.umail} onChange={this.changeUserMailHandler} />
                                </div>

                                <button class="btn btn-primary" onClick={this.saveorUpdateUser}> Save </button>
                                <button class="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel </button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateComponent;
import React, { Component } from 'react'
import UserService from '../services/UserService';

class UpdateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:this.props.match.params.id,
            uname:'',
            pwd:'',
            umail:''
        }
        this.changeUserNameHandler= this.changeUserNameHandler.bind(this);
        this.changeUserPasswordHandler = this.changeUserPasswordHandler.bind(this);
        this.changeUserMailHandler= this.changeUserMailHandler.bind(this);
        this.updateUser= this.updateUser.bind(this);
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( (res) =>{
            let user = res.data;
            this.setState({
                uname: this.state.uname, 
                pwd: this.state.pwd, 
                umail: this.state.umail
            });
        });
    } 

    updateUser = (u) => {
        u.preventDefault();
        let user = {uname: this.state.uname, pwd: this.state.pwd, umail: this.state.umail};
        console.log('user => ' + JSON.stringify(user));
        console.log('id => ' + JSON.stringify(this.state.id));
        UserService.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/users');
        });
    }
    
    changeUserNameHandler=(event)=>{
        this.setState({uname:event.target.value})
    }
    changeUserPasswordHandler=(event)=>{
        this.setState({pwd:event.target.value})
    }
    changeUserMailHandler=(event)=>{
        this.setState({umail:event.target.value})
    }

    cancel()
    {
        this.props.navigate.push("/users");
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div class="form-group"> 
                                            <label> user Name </label>
                                            <input placeholder="user Name" class="form-control" name="username" value={this.state.uname} onChange={this.changeUserNameHandler} />
                                        </div>
                                        <div class="form-group"> 
                                            <label> User Password </label>
                                            <input placeholder="user Password" class="form-control" name="password" value={this.state.pwd} onChange={this.changeUserPasswordHandler} />
                                        </div>
                                        <div class="form-group"> 
                                            <label> User Mail </label>
                                            <input placeholder="user Mail" class="form-control" name="emailId" value={this.state.umail} onChange={this.changeUserMailHandler} />
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
export default UpdateComponent;
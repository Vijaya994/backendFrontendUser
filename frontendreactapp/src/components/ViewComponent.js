import React from "react";
import UserService from "../services/UserService";

class ViewComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            id: this.props.match.params.id, user:{}
        }
    }

    componentDidMount()
    {
        UserService.getUserById(this.state.id).then(res=>{
            this.setState({user:res.data})
        })
    }
    render()
    {
        return(
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center  text-black"> View User Data </h3>
                <div className="card-body">
                    <table className="table-borderless ">
                        <thead>
                            <tr>
                            <th> User ID: </th>
                            <th> {this.state.user.id} </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td> UserName: </td>
                            <td> {this.state.user.uname} </td>
                        </tr>
                        <tr>
                            <td> User Password: </td>
                            <td> {this.state.user.pwd} </td>
                        </tr>
                        <tr>
                            <td> User Mail: </td>
                            <td> {this.state.user.umail} </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }  
}
export default ViewComponent;
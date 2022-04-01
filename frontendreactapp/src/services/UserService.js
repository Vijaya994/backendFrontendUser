import axios from 'axios';

const RESTURL="http://localhost:8080/api/user";

class UserService
{
    getUsers()
    {
        return axios.get(RESTURL);
    }
    
    createUser(user)
    {
        return axios.post(RESTURL,user);
    }

    getUserById(userId)
    {
        return axios.get(RESTURL+'/'+userId);
    }
    
    deleteUser(userId)
    {
        return axios.delete(RESTURL+'/'+userId);
    }

    updateUser(user,userId)
    {
        return axios.put(RESTURL+'/'+userId,user);
    }
}
export default new UserService();
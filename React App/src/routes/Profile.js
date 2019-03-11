import React from 'react';
import {Checkbox, Button} from 'antd';
import NavBar from '../components/Navbar.jsx';
import Footer from '../components/footer.jsx';
import YouTube from 'react-youtube';
import profService from "../services/profileService";
import notify from "../services/notify";
import auth from "../services/authService";


export default class Profile extends React.Component {


    state = {
        username: '',
        email: '',
        password: '',
        repeatPass: '',
        profilePic: sessionStorage.getItem("profilePic"),
        isAdmin: false,
        userId: sessionStorage.getItem("userId")
    };

    onChange = (e) => {
        let id = profService.getId();

        this.setState({
            [e.target.name]: e.target.value,
        });

        console.log(this.state.profilePic);

    };

    onSubmit = () => {
        let username = this.state.username;
        let isAdmin = this.state.isAdmin;
        let profilePic = this.state.profilePic;
        let object = {profilePic}
        let id = this.state.userId;
        profService.updateUser(id, object).then((userData) => {


            notify.showInfo("Updated");
            auth.saveSession(userData);
            window.location = "user-profile";

        }).catch(() => notify.handleError)


    }

    render() {

        let username = sessionStorage.getItem("username");
        let isAdmin = sessionStorage.getItem("isAdmin");
        if (isAdmin === "false") {
            isAdmin = "Not Admin"
        }
        else isAdmin = "Admin"
        let profilePic = sessionStorage.getItem("profilePic");


        return (


            <div>
                <NavBar/>
                <center><h3 id="userPic"><img class="profilePic" src={profilePic} alt="yoga" alt="err" width="480"
                                              height="480"/></h3></center>
                <center><h3 id="username">{username} </h3></center>
                <center><h3 id="isAdmin">{isAdmin}</h3></center>
                <center><label id="ChangeProfilePic">
                    Img url: <input type="text" name="profilePic" onChange={e => this.onChange(e)}
                                    value={this.state.profilePic}/>
                </label></center>
                <br/>

                <center><Button id="btnChange" onClick={() => this.onSubmit()} type="submit">Change picture</Button>
                </center>


                <Footer/>
            </div>
        )


    }

}
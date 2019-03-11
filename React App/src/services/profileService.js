import $ from "jquery";
import React from 'react';
import notify from "../services/notify.js";
import remote from "../services/remote.js";
import auth from "../services/authService.js";

let profileService = (() => {
    function getUser(id) {
        
        //GET /user/:appKey/:id HTTP/1.1
        return remote.get('user', id, 'kinvey');
        
    }   

    function updateUser(id, object) {

       // PUT / user /: appKey /: id HTTP / 1.1
        let data = object;
        
        return remote.update('user', id, 'kinvey', data)

    }   

    let id = sessionStorage.getItem("userId");
    function getId(){
        console.log(id);
    }

    return {
        getUser,
        updateUser,
        getId,
    }

})();
export default profileService;
import $ from "jquery";
import React from 'react';


let remote = (() => {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_B1ikFDtBE'; // APP KEY HERE
    const APP_SECRET = 'b1a941617ff44abc9b43975e0b5f1dfe'; // APP SECRET HERE

    function makeAuth(type) {
        return type === 'basic'
            ? 'Basic ' + btoa("kid_B1ikFDtBE" + ':' + "b1a941617ff44abc9b43975e0b5f1dfe")
            : 'Kinvey ' + sessionStorage.getItem('authtoken');
    }

    // request method (GET, POST, PUT)
    // kinvey module (user/appdata)
    // url endpoint
    // auth
    function lol() {

    }

    

    function makeRequest(method, module, endpoint, auth) {
        let sad = makeAuth(auth);
        
        return {
            url: BASE_URL + module + '/' + APP_KEY + '/' + endpoint,
            method: method,
            
            headers: {
                'Authorization': makeAuth(auth)
            }
        }
    }

    function get (module, endpoint, auth) {
        return $.ajax(makeRequest('GET', module, endpoint, auth));
    }

    function post (module, endpoint, auth, data) {
        let obj = makeRequest('POST', module, endpoint, auth);
        if (data) {
            obj.data = data;
        }
        return $.ajax(obj);
    }

    function update(module, endpoint, auth, data) {
        let obj = makeRequest('PUT', module, endpoint, auth);
        obj.data = data;
        return $.ajax(obj);

        
    }

    function remove(module, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', module, endpoint, auth));
    }
 
    return {
        get,
        post,
        update,
        remove,
        lol
    }
})();
export default remote;

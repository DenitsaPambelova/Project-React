import $ from "jquery";
import React from 'react';
import notify from "../services/notify.js";
import remote from "../services/remote.js";
import auth from "../services/authService.js";

let products = (() => {
    function getAllProducts() {
        const endpoint = 'products?query={}&sort={"_kmd.ect": -1}';

        return remote.get('appdata', "Products", 'kinvey');
    }
    
    function createProduct(price, imgUrl, productDesc, productName) {
        let data = { price, imgUrl, productDesc, productName};

        return remote.post('appdata', 'Products', 'kinvey', data);
    }

    function editProduct(price, imgUrl, productDesc, productName, productId) {
        const endpoint = `Products/${productId}`;
        let data = { price, imgUrl, productDesc, productName};

        return remote.update('appdata', endpoint, 'kinvey', data);
    }
    
    function deleteProduct(postId) {
        const endpoint = `Products/${postId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

   

    function getProductById(postId) {
        const endpoint = `Products/${postId}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    return {
        getAllProducts,
        createProduct,
        editProduct,
        deleteProduct,
        getProductById,
        
        
    }
})();
export default products;
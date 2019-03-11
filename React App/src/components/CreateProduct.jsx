import React from 'react';
import auth from "../services/authService.js";
import notify from "../services/notify.js";
import product from "../services/productsService.js";
import profile from "../services/profileService";

export default class createProduct extends React.Component {

    state = {
        crtPrice2: '0',
        crtDescription2: 'Description..',
        crtTitle2: 'Title..',
        prdPicUrl2: 'Url..',
        myList: []
    };
    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    };


    onSubmit = () => {

        let price = this.state.crtPrice2;
        let imgUrl = this.state.prdPicUrl2;
        let productDesc = this.state.crtDescription2;
        let productName = this.state.crtTitle2;
        let isAdmin = sessionStorage.getItem("isAdmin");


        if (isAdmin === "false") {
            notify.showError("Admin Only")
        }
        else if (price === "") {
            notify.showError("Price Is Required");
        }
        else if (price <= 0) {
            notify.showError("Price > 0!")
        }
        else if (imgUrl === "") {
            notify.showError("Url Is Required!")
        }
        else if (productName === "") {
            notify.showError("Name Is Required!")
        }
        else if (productName.length > 22) {
            notify.showError("Title Should Be Shorter!")
        }
        else if (productDesc === "") {
            notify.showError("Description is Required!")
        }
        else if (productDesc.length > 784) {
            notify.showError("Description Should Be Shorter!")
        }
        else {
            product.createProduct(price, imgUrl, productDesc, productName).then((userData) => {

                notify.showInfo("Product added successfully!");
                window.location = ("catalogue");

            }).catch(() => notify.showError("Product Creation Error"))
        }

    };

    render() {

        return (

            <div className="productCreater">
                <h1 id="creatorTitle">Create</h1>

                <div id="crtTitle">
                    Product<br/><textarea type="text" id="crtTitle2" onChange={e => this.onChange(e)}
                                          value={this.state.crtTitle2}/>
                </div>
                <br/>
                <div id="crtDescription">
                    Description<textarea type="text" id="crtDescription2" onChange={e => this.onChange(e)}
                                         value={this.state.crtDescription2}/>
                </div>
                <br/>
                <center><label id="prdPicUrl">
                    Img url:<br/> <input type="text" id="prdPicUrl2" onChange={e => this.onChange(e)}
                                         value={this.state.profilePic}/>
                </label></center>
                <br/>
                <div id="crtPrice">
                    Price<br/><input type="number" id="crtPrice2" onChange={e => this.onChange(e)}
                                     value={this.state.crtPrice2}/>
                </div>
                <br/>


                <p>
                    <button2 onClick={() => this.onSubmit()}>Create</button2>
                </p>
            </div>

        )
    }


}


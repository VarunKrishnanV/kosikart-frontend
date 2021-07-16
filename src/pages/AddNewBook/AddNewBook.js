import React from 'react'
import logo from '../../assets/images/logo.png'
import './AddNewBook.css'

function AddNewBook() {
    return (
        <div className="form__container">
            <div className="form__logo">
                <img src={logo} alt="" />
            </div>

            <div className="form__heading">
                <h2>Add new book</h2>
            </div>

            <form className="form">

                <div className="form__item">
                    <label htmlFor="name">Book Title</label>
                    <input type="text" id="title" />
                </div>
                <div className="form__item">
                    <label htmlFor="name">Book Author</label>
                    <input type="text" id="author" />
                </div>
                <div className="form__item">
                    <label htmlFor="name">Book Publications</label>
                    <input type="text" id="publications" />
                </div>
                <div className="form__item">
                    <label htmlFor="MRP">MRP</label>
                    <input type="text" id="mrpPrice" />
                </div>
                <div className="form__item">
                    <label htmlFor="offPrice">Offer pirce</label>
                    <input type="text" id="offPrice" />
                </div>
                <div className="form__item">
                    <label htmlFor="weight">Weight</label>
                    <input type="text" id="weight" />
                </div>
                <div className="form__item">
                    <label htmlFor="name">Category</label>
                    <select name="" id="">
                        <option value=""></option>
                        <option value="">Engineering</option>
                        <option value="">Polytechnic</option>
                        <option value="">Medical</option>
                        <option value="">PSC</option>
                    </select>
                </div>
                <div className="form__item">
                    <label htmlFor="name">Semester</label>
                    <select name="" id="">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                <div class="form__item">
                    <label for="formFile">Product Images</label>
                    <input class="form-control" type="file" id="formFile" />
                </div>
                <div className="form__item">
                    <button type="submit">Save</button>
                </div>

            </form>

        </div>
    )
}

export default AddNewBook

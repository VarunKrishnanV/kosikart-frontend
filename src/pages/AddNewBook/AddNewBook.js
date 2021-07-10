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
                    <input type="text" id="name" />
                </div>
                <div className="form__item">
                    <label htmlFor="name">Actual price</label>
                    <input type="text" id="name" />
                </div>
                <div className="form__item">
                    <label htmlFor="name">Offer pirce</label>
                    <input type="text" id="name" />
                </div>

                

                <div className="form__item">
                    <label htmlFor="name">Category</label>
                    <select name="" id="">
                        <option value=""></option>
                        <option value="">Value2</option>
                        <option value="">Value3</option>
                        <option value="">Value4</option>
                        <option value="">Value5</option>
                    </select>
                </div>
                <div className="form__item">
                    <label htmlFor="name">Sub-category</label>
                    <select name="" id="">
                        <option value=""></option>
                        <option value="">Value2</option>
                        <option value="">Value3</option>
                        <option value="">Value4</option>
                        <option value="">Value5</option>
                    </select>
                </div>

                <div class="form__item">
                    <label for="formFile">Product Images</label>
                    <input class="form-control" type="file" id="formFile" />
                </div>
                

                <div className="form__item">
                    <button type="submit">Create Account</button>
                </div>

            </form>

        </div>
    )
}

export default AddNewBook

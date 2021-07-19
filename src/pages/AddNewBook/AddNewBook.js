import React, {useState} from 'react'
import logo from '../../assets/images/logo.png'
import './AddNewBook.css'
import Header from "../../components/Header/Header";
import {signUp} from "../../APIs/SignUp";
import {FirebaseConfig} from "../../config/FirebaseConfig";
import storage from "firebase";

function AddNewBook() {

    const [title,setTitle] = useState('');
    const [author,setAuthor] =useState('');
    const [publications,setPublications] = useState('');
    const [mrpPrice,setMrpPrice] =useState('');
    const [offPrice,setOffPrice]=useState('');
    const [weight,setWeight] =useState('');
    const [category,setCategory] =useState('');
    const [semester,setSemester] =useState('');
    const [image, setImage] = useState('');


    const handleSubmit=(event)=>{
        event.preventDefault()
        event.nativeEvent.stopImmediatePropagation()
        addBook(title, author, publications, mrpPrice, offPrice, weight, category, semester, image)


    }
    const handleChange=(e)=>{
        if(e.target.id==='title'){
            setTitle(e.target.value)
        }
        if(e.target.id==='author') {
            setAuthor(e.target.value)
        }
        if(e.target.id==='publications'){
            setPublications(e.target.value)
        }
        if(e.target.id==='mrpPrice'){
            setMrpPrice(e.target.value)
        }
        if(e.target.id==='offPrice'){
            setOffPrice(e.target.value)
        }
        if(e.target.id==='weight'){
            setWeight(e.target.value)
        }
        if(e.target.id==='category'){
            setCategory(e.target.value)
        }
        if(e.target.id==='semester'){
            setSemester(e.target.value)
        }
        if(e.target.id==='image'){
            setImage(e.target.files[0])
        }
    }

    return (
<div>
    <Header/>
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
                    <input type="text" id="title" onChange={handleChange} />
                </div>
                <div className="form__item">
                    <label htmlFor="name">Book Author</label>
                    <input type="text" id="author" onChange={handleChange} />
                </div>
                <div className="form__item">
                    <label htmlFor="name">Book Publications</label>
                    <input type="text" id="publications" onChange={handleChange} />
                </div>
                <div className="form__item">
                    <label htmlFor="MRP">MRP</label>
                    <input type="text" id="mrpPrice" onChange={handleChange} />
                </div>
                <div className="form__item">
                    <label htmlFor="offPrice">Offer pirce</label>
                    <input type="text" id="offPrice" onChange={handleChange} />
                </div>
                <div className="form__item">
                    <label htmlFor="weight">Weight</label>
                    <input type="text" id="weight" onChange={handleChange} />
                </div>
                <div className="form__item">
                    <label htmlFor="name">Category</label>
                    <select name="" id="category" onChange={handleChange}>
                        <option value=""></option>
                        <option value="Engineering">Engineering</option>
                        <option value="Polytechnic">Polytechnic</option>
                        <option value="Medical">Medical</option>
                        <option value="PSC">PSC</option>
                    </select>
                </div>
                <div className="form__item">
                    <label htmlFor="name">Semester</label>
                    <select name="" id="semester" onChange={handleChange}>
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                <div class="form__item">
                    <label for="formFile">Product Images</label>
                    <input class="form-control" type="file" id="image" onChange={handleChange} />
                </div>
                <div className="form__item">
                    <button type="submit" onClick={handleSubmit}>Save</button>
                </div>

            </form>

        </div>
</div>
    )
}

export const addBook =(title, author, publications, mrpPrice, offPrice, weight, category, semester, image)=>{

    const imageRef = storage.ref(`/BookType/${category}/${semester}/${image.name}`)
        .on("state_changed" , alert("image uploaded successfully."));

    const imageUrl = imageRef.getDownloadURL();

    FirebaseConfig.firestore().collection('BookType').doc(category).collection(semester)
        .doc(title).set({
        title : title,
        author : author,
        publications : publications,
        mrpPrice : mrpPrice,
        offPrice : offPrice,
        weight : weight,
        category : category,
        semester : semester,
        imageUrl : imageUrl
    })
        .then(() => {
            console.log("Book Added Successfully.");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}


export default AddNewBook

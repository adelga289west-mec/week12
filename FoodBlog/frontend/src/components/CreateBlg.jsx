import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Createblog.css"

function CreateBlg() {
    const [userForm, setUserForm] = useState({
        title: "",
        description: "",
        content: "",
        dishOrigin: "Dish Origin",
        category: "Category"

    });

    const inputsHandler = (e) => {
        setUserForm((prevNext) => ({
            ...prevNext,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/blogs/create-blog", userForm)
            .then((res) => {
                console.log(res.data);
                setUserForm({
                    title: "",
                    description: "",
                    content: "",
                    dishOrigin: "",
                    category: ""


                });
            });
    };

    useEffect(() => {}, []);


    return (
        <>
       <div className="image-container">
        <img id='foodpic' src="food.jpg" alt="World Kitchen Wonders" />
      </div>
      
      <form onSubmit={onSubmit}>

        <div id="boxes">
          
        <label for="title" id="title">Title:</label> 
        <div className="top-inputs">
          <input id="titlebox" name="title" type="text" placeholder="Title" value={userForm.title} onChange={inputsHandler} />
        <select name="dishOrigin" id="Dish-Origin"  value={userForm.dishOrigin} onChange={inputsHandler}>
            <option value="Dish Origin" selected hidden>Dish Origin</option>
            <option value="Asian">Asian</option>
            <option value="European">European</option>
            <option value="American">American</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Thai">Thai</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Chinese">Chinese</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Spanish">Spanish</option>
            <option value="South American">South American</option>
            <option value="North African">North African</option>
            <option value="Middle Eastern">Middle Eastern</option>
            <option value="Caribbean">Caribbean</option>
            <option value="Central and South America">Central &amp; South America</option>
            <option value="Australia/Oceania">Australia / Oceania</option>
            <option value="East Asia">East Asia</option>
            <option value="West Africa">West Africa</option>
            <option value="Sub-Saharan Africa">Sub-Saharan Africa</option>
            <option value="British Isles">British Isles</option>
            <option value="Caucasus">Caucasus</option>
            <option value="Scandinavia">Scandinavia</option>
            <option value="Russia, Central Asia, CIS countries">Russia, Central Asia, CIS Countries</option>
            <option value="South Asia">South Asia</option>
            <option value="Eastern Europe">Eastern Europe</option>
            <option value="Western Europe">Western Europe</option>
            <option value="Latin America">Latin America</option>
            <option value="Greenland">Greenland</option>
            <option value="Iceland">Iceland</option>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
            <option value="Other World Regions">Other World Regions</option>
        </select>
      </div>
      </div>

      <div id="boxes">
        <label for="Description" id="title">Description:</label>
        <div className="top-inputs">
        <textarea id="Description" name="description" placeholder="Description" value={userForm.description} onChange={inputsHandler}></textarea>
          <select name="category" id="category" value={userForm.category} onChange={inputsHandler}>
              <option value="Category" selected hidden>Category</option>
              <option value="Appetizer">Appetizer</option>
              <option value="Main Course">Main Course</option>
              <option value="Side Dishes">Side Dishes</option>
              <option value="Salads">Salads</option>
              <option value="Beverages">Beverages</option>
              <option value="Desserts">Desserts</option>
          </select>
        </div>
      </div>

      <div id="boxes">
        <label for="Content" id="title">Content:</label>
        <div className="top-inputs">
          <textarea id="Content" name="content" placeholder="Content" value={userForm.content} onChange={inputsHandler}></textarea>
          <input id="files" name="file" type="file" placeholder="Insert Image" />
      </div>
      </div>
      <button className="post-button">Post</button>
      </form>
</>
    );
}

export default CreateBlg;

import React, { useState } from "react";
import validator from "validator";
function Faq() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const errors = {};
    if (formData.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (formData.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!validator.isEmail(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (formData.phone.trim() === "") {
      errors.phone = "Phone number is required";
    } else if (!validator.isNumeric(formData.phone)) { 
      errors.phone = "Phone number should contain only numbers";
    }
   
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

  
    fetch("http://localhost:8086/api/form/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response:", data);

       
        setFormData({
          name: "",
          email: "",
          phone: "",
        });
        
        setFormErrors({});
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  return (
    <div className="Faq w-5/6 mx-auto pb-20">
      <h2 className="text-3xl text-white font-medium py-5 md:text-4xl xl:text-5xl">
        Want to say hello?
        <br />
        Have questions?
        <br />
        Feel free to contact us.
      </h2>
      <div className="py-5 text-white">
        <form className="w-2/3 max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              className={`bg-gray shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formErrors.name ? "border-red-500" : ""
              }`}
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && (
              <p className="text-red-500 text-xs italic">{formErrors.name}</p>
            )}
          </div>
          <div className="mb-2">
            <input
              className={`bg-gray shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formErrors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="text"
              placeholder="E-mail"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs italic">{formErrors.email}</p>
            )}
          </div>
          <div className="mb-2">
            <input
              className={`bg-gray shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formErrors.phone ? "border-red-500" : ""
              }`}
              id="contact"
              type="text"
              placeholder="Contact No."
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {formErrors.phone && (
              <p className="text-red-500 text-xs italic">{formErrors.phone}</p>
            )}
          </div>
          <input
            type="submit"
            value="Hello"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </form>
      </div>
    </div>
  );
}

export default Faq;
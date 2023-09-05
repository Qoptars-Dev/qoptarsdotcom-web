import React, { useState } from "react";

function Faq() {
  // Define state variables for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Function to update form input values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch("http://localhost:8086/api/form/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response as needed
        console.log("Response:", data);
  
        // Clear the form input fields by resetting the formData state
        setFormData({
          name: "",
          email: "",
          phone: "",
        });
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
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
          <label className="block mb-2">
            <input
              className="bg-gray shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              name="name" // Add name attribute
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label className="block text-white text-sm font-bold mb-2">
            <input
              className="bg-gray shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="E-mail"
              name="email" // Add name attribute
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label className="block text-white text-sm font-bold mb-2">
            <input
              className="bg-gray shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact"
              type="text"
              placeholder="Contact No."
              name="phone" // Add name attribute
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>
          <input
            type="submit"
            value="Hello"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Faq;
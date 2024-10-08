

import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    checkboxes: {
      HomePages: false,
      DigitalMarketing: false,
      HrmsApplication: false,
      CorporateTraining: false,
      CareerGuidance: false,
      SoftwareDevelopment: false,
    },
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        checkboxes: {
          ...prevData.checkboxes,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, phoneNumber, email, checkboxes, description } = formData;

    let formErrors = {};
    let isValid = true;

    // Validation
    if (!firstName) {
      formErrors.firstName = 'First name is required';
      isValid = false;
    }
    if (!lastName) {
      formErrors.lastName = 'Last name is required';
      isValid = false;
    }
    if (!phoneNumber) {
      formErrors.phoneNumber = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      formErrors.phoneNumber = 'Phone number must be 10 digits';
      isValid = false;
    }
    if (!email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!Object.values(checkboxes).includes(true)) {
      formErrors.checkboxes = 'At least one checkbox must be selected';
      isValid = false;
    }
    if (!description) {
      formErrors.description = 'Description is required';
      isValid = false;
    }

    if (isValid) {
      // Handle form submission
      console.log('Form submitted successfully:', formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div id="contactus" className="flex items-center justify-center min-h-screen bg-gray-700 p-8 ">
      <div className="w-full max-w-lg bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <span className="block text-lg font-medium mb-2">Select Areas of Interest</span>
            <div className="flex flex-col gap-2">
              {Object.keys(formData.checkboxes).map((key) => (
                <label
                  key={key}
                  className={`flex items-center p-2 rounded-md transition-all duration-300 ${
                    formData.checkboxes[key] ? 'bg-blue-100 border-2 border-blue-300' : 'bg-gray-100'
                  }`}
                >
                  <input
                    type="checkbox"
                    name={key}
                    checked={formData.checkboxes[key]}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
              ))}
            </div>
            {errors.checkboxes && <p className="text-red-500 text-sm mt-1">{errors.checkboxes}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 h-32"
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

// src/components/SignUpForm.jsx

import React, { useState } from 'react';
import {
  User, Shield, Building, MapPin, Phone, Mail, FileText, Lock, Image as ImageIcon, CheckSquare
} from 'lucide-react';

// If you created the FileInput component, import it:
import FileInput from './FileInput';

const SignUpForm = () => {
  // State management using a single state object
  const [formData, setFormData] = useState({
    ownerName: '',
    cnic: '',
    storeName: '',
    storeLocation: '',
    phone: '',
    email: '',
    ntn: '',
    password: '',
    confirmPassword: '',
    terms: false,
    photo: null,
    frontCnic: null,
    backCnic: null,
    storeLogo: null,
    storePhoto: null,
    inquiryDoc: null,
  });
  
  const [showPassword, setShowPassword] = useState(false); // For password visibility

  // A single handler for all text-based inputs and the checkbox
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // A single handler for all file inputs
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    
    // Check if passwords match (simple validation)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create a FormData object to send multipart data
    const dataToSubmit = new FormData();
    for (const key in formData) {
      if (formData[key]) { // Only append if there is a value
        dataToSubmit.append(key, formData[key]);
      }
    }

    console.log("Submitting the following data:");
    // Log the data for debugging
    for (let [key, value] of dataToSubmit.entries()) {
      console.log(`${key}:`, value);
    }

    // Here you would make your API call, e.g.:
    // axios.post('http://localhost:8000/api/v1/stores/register', dataToSubmit)
    //   .then(response => console.log(response.data))
    //   .catch(error => console.error(error));
  };
  
  // A generic input component to reduce repetition
  const FormInput = ({ id, name, type, placeholder, value, onChange, icon: Icon }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{placeholder}</label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="w-5 h-5 text-gray-400" />
        </span>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
        />
      </div>
    </div>
  );


  return (
    <div className="max-w-4xl w-full">
      <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 backdrop-blur-sm bg-opacity-95">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
            Create a Store Account
          </h1>
          <p className="text-gray-600">
            Already have an account?
            <a href="#" className="text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text hover:from-teal-700 hover:to-emerald-700 ml-1 font-medium transition-all duration-200">
              Sign in here
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Using a grid for the layout. It becomes 2 columns on medium screens and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* These two will be side-by-side on md screens */}
            <FormInput id="ownerName" name="ownerName" type="text" placeholder="Owner Name" value={formData.ownerName} onChange={handleInputChange} icon={User} />
            <FormInput id="cnic" name="cnic" type="text" placeholder="CNIC (e.g., 12345-1234567-1)" value={formData.cnic} onChange={handleInputChange} icon={Shield} />
            
            {/* These will take full width */}
            <div className="md:col-span-2">
              <FormInput id="storeName" name="storeName" type="text" placeholder="Store Name" value={formData.storeName} onChange={handleInputChange} icon={Building} />
            </div>
             <div className="md:col-span-2">
              <FormInput id="storeLocation" name="storeLocation" type="text" placeholder="Store Location" value={formData.storeLocation} onChange={handleInputChange} icon={MapPin} />
            </div>

            <FormInput id="phone" name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} icon={Phone} />
            <FormInput id="email" name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} icon={Mail} />
            
            {/* These two will be side-by-side on md screens */}
            <FormInput id="password" name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} icon={Lock} />
            <FormInput id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} icon={Lock} />

            <div className="md:col-span-2"><hr /></div>

            {/* File Inputs */}
            <FileInput id="photo" name="photo" label="Owner Photo" helpText="Upload a clear photo" accepted="image/*" icon={ImageIcon} value={formData.photo} onChange={handleFileChange} />
            <FileInput id="frontCnic" name="frontCnic" label="CNIC (Front Side)" helpText="Upload front of CNIC" accepted="image/*" icon={ImageIcon} value={formData.frontCnic} onChange={handleFileChange} />
            <FileInput id="backCnic" name="backCnic" label="CNIC (Back Side)" helpText="Upload back of CNIC" accepted="image/*" icon={ImageIcon} value={formData.backCnic} onChange={handleFileChange} />
            <FileInput id="storeLogo" name="storeLogo" label="Store Logo" helpText="Upload your store logo" accepted="image/*" icon={ImageIcon} value={formData.storeLogo} onChange={handleFileChange} />
            <FileInput id="storePhoto" name="storePhoto" label="Store Photo" helpText="Upload a photo of your store" accepted="image/*" icon={ImageIcon} value={formData.storePhoto} onChange={handleFileChange} />
            <FileInput id="inquiryDoc" name="inquiryDoc" label="Inquiry Document" helpText="Upload document (PDF only)" accepted=".pdf" icon={FileText} value={formData.inquiryDoc} onChange={handleFileChange} />

            {/* Terms and Conditions - Spans full width */}
            <div className="md:col-span-2 flex items-start space-x-3 p-4 border rounded-lg">
                <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    className="h-5 w-5 mt-0.5 rounded border-gray-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                />
                <div className="flex-1">
                    <label htmlFor="terms" className="font-medium text-gray-800 cursor-pointer">Accept Terms & Conditions</label>
                    <p className="text-sm text-gray-500">By checking this, you agree to our Terms of Service.</p>
                </div>
            </div>

            {/* Submit Button - Spans full width */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!formData.terms} // Example: Disable button if terms are not accepted
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
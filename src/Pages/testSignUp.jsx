import React, { useState } from "react";
import {
  User,
  Shield,
  Building,
  MapPin,
  Phone,
  Mail,
  FileText,
  Lock,
  Image as ImageIcon,
} from "lucide-react";

// --- THE ENTIRE PAGE IS THIS ONE COMPONENT ---
export default function SignUpPage() {
  // 1. STATE MANAGEMENT: Holds all the data from our form.
  const [formData, setFormData] = useState({
    ownerName: "",
    cnic: "",
    storeName: "",
    storeLocation: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
    photo: null,
    frontCnic: null,
    backCnic: null,
    storeLogo: null,
    storePhoto: null,
    inquiryDoc: null,
  });

  // 2. EVENT HANDLERS: These functions update the state when you type or click.
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the page from reloading

    // Simple validation checks
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.terms) {
      alert("You must accept the terms and conditions!");
      return;
    }

    // On a real project, you would send this data to a server.
    // For now, we just log it to the browser's console.
    console.log("Form Submitted Successfully! Here is the data:");
    console.log(formData);
  };

  // 3. JSX: This is the visual part of the component. All HTML is here.
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 via-emerald-600 to-cyan-600 flex flex-col">
      {/* ----- The Header is directly here ----- */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                DesignMe.
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-teal-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-teal-600 transition-colors"
              >
                Vectors
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-teal-600 transition-colors"
              >
                Templates
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Sign in
              </a>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105">
                Start free trial
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ----- Main content area ----- */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                Create a Store Account
              </h1>
              <p className="text-gray-600">
                Already have an account?
                <a
                  href="#"
                  className="text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text hover:from-teal-700 hover:to-emerald-700 ml-1 font-medium transition-all duration-200"
                >
                  Sign in here
                </a>
              </p>
            </div>

            {/* ----- The Form is directly here ----- */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* --- Owner Name Input (written out completely) --- */}
                <div>
                  <label
                    htmlFor="ownerName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Owner Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-gray-400" />
                    </span>
                    <input
                      id="ownerName"
                      name="ownerName"
                      type="text"
                      placeholder="Owner Name"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                {/* --- CNIC Input (written out completely) --- */}
                <div>
                  <label
                    htmlFor="cnic"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    CNIC
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Shield className="w-5 h-5 text-gray-400" />
                    </span>
                    <input
                      id="cnic"
                      name="cnic"
                      type="text"
                      placeholder="CNIC (e.g., 12345-1234567-1)"
                      value={formData.cnic}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                {/* --- Store Name Input --- */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="storeName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Store Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="w-5 h-5 text-gray-400" />
                    </span>
                    <input
                      id="storeName"
                      name="storeName"
                      type="text"
                      placeholder="Store Name"
                      value={formData.storeName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                {/* --- Password Input --- */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </span>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                {/* --- Confirm Password Input --- */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </span>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <hr />
                </div>

                {/* --- Owner Photo File Input --- */}
                <div>
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Owner Photo
                  </label>
                  <label
                    htmlFor="photo"
                    className="cursor-pointer bg-white border border-gray-300 rounded-lg flex items-center px-4 py-3 w-full text-gray-500 hover:bg-gray-50"
                  >
                    <ImageIcon className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="flex-1 truncate">
                      {formData.photo
                        ? formData.photo.name
                        : "Upload a clear photo"}
                    </span>
                  </label>
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>

                {/* --- CNIC Front File Input --- */}
                <div>
                  <label
                    htmlFor="frontCnic"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    CNIC (Front Side)
                  </label>
                  <label
                    htmlFor="frontCnic"
                    className="cursor-pointer bg-white border border-gray-300 rounded-lg flex items-center px-4 py-3 w-full text-gray-500 hover:bg-gray-50"
                  >
                    <ImageIcon className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="flex-1 truncate">
                      {formData.frontCnic
                        ? formData.frontCnic.name
                        : "Upload front of CNIC"}
                    </span>
                  </label>
                  <input
                    id="frontCnic"
                    name="frontCnic"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>

                {/* --- Terms Checkbox --- */}
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
                    <label
                      htmlFor="terms"
                      className="font-medium text-gray-800 cursor-pointer"
                    >
                      Accept Terms & Conditions
                    </label>
                    <p className="text-sm text-gray-500">
                      By checking this, you agree to our Terms of Service.
                    </p>
                  </div>
                </div>

                {/* --- Submit Button --- */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

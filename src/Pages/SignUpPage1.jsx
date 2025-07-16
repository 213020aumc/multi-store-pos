import { useState } from "react";
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

// --- Helper Component 1: Header (defined in the same file) ---
// We define the Header here so we can use it below without a separate file.
const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Swift Cart
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
            <button className="text-gray-700 hover:text-teal-600 transition-colors">
              Sign in
            </button>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105">
              Start free trial
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// --- Helper Component 2: A generic text input (defined in the same file) ---
// This reduces code repetition for our text inputs.
const FormInput = ({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  icon: Icon,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-2"
    >
      {placeholder}
    </label>
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

// --- Helper Component 3: A generic file input (defined in the same file) ---
// This reduces code repetition for our file inputs.
const FileInput = ({
  id,
  name,
  label,
  helpText,
  accepted,
  icon: Icon,
  value,
  onChange,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-2"
    >
      {label}
    </label>
    <div className="relative">
      <label
        htmlFor={id}
        className="cursor-pointer bg-white border border-gray-300 rounded-lg flex items-center px-4 py-3 w-full text-gray-500 hover:bg-gray-50 transition-colors"
      >
        <Icon className="w-5 h-5 text-gray-400 mr-3" />
        <span className="flex-1 truncate">{value ? value.name : helpText}</span>
      </label>
      <input
        id={id}
        name={name}
        type="file"
        className="sr-only" // Visually hide the default ugly file input
        accept={accepted}
        onChange={onChange}
      />
    </div>
  </div>
);

// --- THE MAIN PAGE COMPONENT ---
export default function SignUpPage1() {
  // 1. STATE MANAGEMENT: A single state object to hold all form data
  const [formData, setFormData] = useState({
    ownerName: "",
    cnic: "",
    storeName: "",
    storeLocation: "",
    phone: "",
    email: "",
    ntn: "",
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

  // 2. EVENT HANDLERS: Functions to update the state when the user interacts with the form
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
    e.preventDefault(); // This stops the page from reloading on submit

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.terms) {
      alert("You must accept the terms and conditions!");
      return;
    }

    // This is where you would send the data to a server.
    // For now, we'll just log it to the console to see it working.
    console.log("Form Submitted Successfully!");
    console.log(formData);

    // If you were using FormData for an API call:
    // const dataToSubmit = new FormData();
    // for (const key in formData) {
    //   dataToSubmit.append(key, formData[key]);
    // }
    // console.log("FormData object ready for API:", dataToSubmit);
  };

  // 3. JSX: The HTML-like structure of our component
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 via-emerald-600 to-cyan-600 flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 backdrop-blur-sm bg-opacity-95">
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* These two fields are horizontal on medium screens (md) and up */}
                <FormInput
                  id="ownerName"
                  name="ownerName"
                  type="text"
                  placeholder="Owner Name"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  icon={User}
                />
                <FormInput
                  id="cnic"
                  name="cnic"
                  type="text"
                  placeholder="CNIC (e.g., 12345-1234567-1)"
                  value={formData.cnic}
                  onChange={handleInputChange}
                  icon={Shield}
                />

                <div className="md:col-span-2">
                  <FormInput
                    id="storeName"
                    name="storeName"
                    type="text"
                    placeholder="Store Name"
                    value={formData.storeName}
                    onChange={handleInputChange}
                    icon={Building}
                  />
                </div>
                <div className="md:col-span-2">
                  <FormInput
                    id="storeLocation"
                    name="storeLocation"
                    type="text"
                    placeholder="Store Location"
                    value={formData.storeLocation}
                    onChange={handleInputChange}
                    icon={MapPin}
                  />
                </div>

                <FormInput
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  icon={Phone}
                />
                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  icon={Mail}
                />

                {/* These two fields are also horizontal on medium screens */}
                <FormInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  icon={Lock}
                />
                <FormInput
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  icon={Lock}
                />

                <div className="md:col-span-2">
                  <hr />
                </div>

                {/* File Inputs using our helper component */}
                <FileInput
                  id="photo"
                  name="photo"
                  label="Owner Photo"
                  helpText="Upload a clear photo"
                  accepted="image/*"
                  icon={ImageIcon}
                  value={formData.photo}
                  onChange={handleFileChange}
                />
                <FileInput
                  id="frontCnic"
                  name="frontCnic"
                  label="CNIC (Front Side)"
                  helpText="Upload front of CNIC"
                  accepted="image/*"
                  icon={ImageIcon}
                  value={formData.frontCnic}
                  onChange={handleFileChange}
                />
                <FileInput
                  id="backCnic"
                  name="backCnic"
                  label="CNIC (Back Side)"
                  helpText="Upload back of CNIC"
                  accepted="image/*"
                  icon={ImageIcon}
                  value={formData.backCnic}
                  onChange={handleFileChange}
                />
                <FileInput
                  id="storeLogo"
                  name="storeLogo"
                  label="Store Logo"
                  helpText="Upload your store logo"
                  accepted="image/*"
                  icon={ImageIcon}
                  value={formData.storeLogo}
                  onChange={handleFileChange}
                />
                <FileInput
                  id="storePhoto"
                  name="storePhoto"
                  label="Store Photo"
                  helpText="Upload a photo of your store"
                  accepted="image/*"
                  icon={ImageIcon}
                  value={formData.storePhoto}
                  onChange={handleFileChange}
                />
                <FileInput
                  id="inquiryDoc"
                  name="inquiryDoc"
                  label="Inquiry Document"
                  helpText="Upload document (PDF only)"
                  accepted=".pdf"
                  icon={FileText}
                  value={formData.inquiryDoc}
                  onChange={handleFileChange}
                />

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

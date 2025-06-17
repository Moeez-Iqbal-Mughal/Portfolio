import React, { useState } from "react";
import axios from "axios";
import { IoSend } from "react-icons/io5";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post("http://localhost:3000/create", formData);
            const response = await axios.post("https://portfolio-tonv.onrender.com/create", formData);
            if (response.status === 201) {
                setIsPopupVisible(true);
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            } else {
                alert("Failed to submit form. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div>
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-md shadow-2xl">
                        <p className="text-xl font-semibold">Mail sent successfully!</p>
                        <button
                            onClick={closePopup}
                            className="mt-4 bg-orange-500 px-4 py-2 text-white rounded-lg hover:bg-slate-800 transform transition-transform duration-300 hover:-translate-y-2 font-semibold"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full rounded-md p-2 bg-slate-300 shadow-2xl"
                        />
                    </div>
                    <div className="w-full sm:w-1/2 px-2">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full rounded-md p-2 bg-slate-300 shadow-2xl"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full rounded-md p-2 bg-slate-300 shadow-2xl"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full rounded-md p-2 bg-slate-300 shadow-2xl h-32"
                    />
                </div>
                <div>
                    <button className="bg-orange-500 px-4 py-2 text-white rounded-lg hover:bg-slate-800 transform transition-transform duration-300 hover:-translate-y-2 font-semibold flex items-center justify-center">
                        <span>Send</span>
                        <IoSend className="ml-2" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

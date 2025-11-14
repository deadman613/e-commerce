import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate form submission (you can replace this with an API call)
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        // Clear message after 3 seconds
        setTimeout(() => setSuccessMessage(""), 3000);
    };

    return (
        <div className="max-w-2xl mx-auto p-8 mt-10 shadow-lg rounded-lg bg-white">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Contact Us</h2>

            {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-600 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-600 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-600 font-medium">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border p-2 rounded h-24 focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Write your message here..."
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-red-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;

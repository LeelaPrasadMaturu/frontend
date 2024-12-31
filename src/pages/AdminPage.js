import React, { useState } from "react";
import axios from "axios";

const AdminPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        website: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await axios.post("http://127.0.0.1:5000/store", formData);
            if (response.status === 201) {
                setMessage("Details added successfully!");
                setFormData({ name: "", phone: "", website: "" });
            } else {
                setMessage("Failed to add details.");
            }
        } catch (error) {
            console.error(error);
            setMessage("An error occurred while adding details.");
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
            <h2>Admin Page</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="website">Website:</label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>
                <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Add Details
                </button>
            </form>
            {message && <p style={{ marginTop: "20px" }}>{message}</p>}
        </div>
    );
};

export default AdminPage;

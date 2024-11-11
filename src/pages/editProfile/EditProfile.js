import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";
import toast from "react-hot-toast";

const EditProfile = () => {
    const [names, setNames] = useState("Test User");
    const [contacts, setContacts] = useState("03027231731");
    const navigate = useNavigate();

    const updateInfo = (e) => {
        e.preventDefault();
        console.log("User updated with Name:", names, "Contact:", contacts);
        toast.success("User Updated Successfully (Static Demo)");
        navigate('/user-profile');
    };

    return (
        <Layout>
            <div className="edit-box">
                <div className="edit-form">
                    <h1>Edit Profile</h1>
                    <input
                        type="text"
                        value={names}
                        onChange={(e) => setNames(e.target.value)}
                    />
                    <input
                        type="text"
                        value={contacts}
                        onChange={(e) => setContacts(e.target.value)}
                    />
                    <button onClick={updateInfo}>Update</button>
                </div>
            </div>
        </Layout>
    );
};

export default EditProfile;
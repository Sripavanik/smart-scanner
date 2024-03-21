import React from 'react';
import './profile.css';
import Helnav from './Helnav.jsx';
import profile from '../assets/profile.png';
import hand from '../assets/Vectary texture.png';
const Profile = () => {
    return (
        <>
            <Helnav />
            <div className='overall_page'>
            <div className='profile_container'>
                <img src={profile} className="profile_image" />
                <div className="profile_details">
                    <p><span className="detail_label">Faculty Name:</span> Tim John</p>
                    <p><span className="detail_label1">Department:</span> CSE</p>
                    <p><span className="detail_label2">Email:</span> faculty@gmail.com</p>
                    <p><span className="detail_label3">Phone no:</span> 88xxxxxx98</p>
                  
                </div>
             <button className="edit">Edit profile</button>
                
            </div>
            </div>
        </>
    );
}

export default Profile;

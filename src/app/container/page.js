import Layout from '../componen/layout'
import styles from '../componen/stylemodule/container.module.css';
import Container from "../componen/container";
import './container.css'

const Page = () => {
    return (
        <Layout>
            <div className='box'>

                <div class="profile-container">
                    <div class="profile-header">
                        <h1 class="profile-name">John Doe</h1>
                        <p class="profile-email">johndoe@example.com</p>
                    </div>
                    <div class="profile-info">
                        <h2>Profile Information</h2>
                        <p><strong>Location:</strong> New York, USA</p>
                        <p><strong>Bio:</strong> Web developer with a passion for creating interactive web applications.</p>
                        <button id="editProfileBtn" class="edit-btn">Edit Profile</button>
                    </div>
                </div>


                <div class="profile-container">
                    <div class="profile-header">
                    <div className='logo'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg/2048px-Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg.png" alt="Logo" />
                </div><h1 class="profile-name">John Doe</h1>
                        <p class="profile-email">johndoe@example.com</p>
                    </div>
                    <div class="profile-info">
                        <h2>Profile Information</h2>
                        <p><strong>Location:</strong> New York, USA</p>
                        <p><strong>Bio:</strong> Web developer with a passion for creating interactive web applications.</p>
                        <button id="editProfileBtn" class="edit-btn">Edit Profile</button>
                    </div>
                </div>
                <div class="profile-container">
                    <div class="profile-header">
                    <h2 class="profile-name">John Doe</h2>
                    <p class="profile-email">johndoe@example.com</p>
                </div>
                    <ul class="profile-options">
                        <li><a href="/profile">Lihat Profil</a></li>
                        <li><a href="/settings">Pengaturan Akun</a></li>
                        <li><a href="/notifications">Notifikasi</a></li>
                        <li><a href="/privacy">Pengaturan Privasi</a></li>
                        <li><a href="/logout" class="logout">Keluar</a></li>
                    </ul>
                </div>

                {/* end */}
            </div>
        </Layout>
    );
}
export default Page;
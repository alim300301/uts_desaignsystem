import Layout from '../componen/layout';
import styles from '../componen/stylemodule/container.module.css';
import Button from '../componen/button';
import './button.css'
const Page = () => {
    return (
        <Layout>
            <div class="login-container">
                <h2>Login</h2>
                <form action="login.php" method="POST">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required/>

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required/>

                    <button type="submit">Login</button>
                </form>
            </div>


            {/* 2 */}
            <div class="login-container">
                <h2>Welcome Back</h2>
                <p>Please login to your account</p>
                
                <form action="login.php" method="POST">
                    <div class="input-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" required/>
                    </div>

                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required/>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>

            {/* 3 */}

            <div class="login-container">
                <h2>Welcome Back</h2>
                <p>Please login to your account</p>
                
                <form action="login.php" method="POST">
                    <div class="input-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" required/>
                    </div>

                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required/>
                    </div>

                    <button type="submit">Login</button>
                </form>

                <div class="options">
                    <a href="register.php">Create an account</a> | 
                    <a href="forgot-password.php">Forgot Password?</a>
                </div>
    
                <div class="social-login">
                    <p>Or login with</p>
                    <button class="social-btn google">Google</button>
                    <button class="social-btn facebook">Facebook</button>
                </div>
            </div>
        </Layout>
    );
}
export default Page;
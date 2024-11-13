import Layout from '../componen/layout'
import styles from '../componen/stylemodule/container.module.css';
import './home.css'

const Page = () => {
    return (
      <Layout>
        <div className={styles.container}>
          <h1>SDN 5 Bajulmati</h1>
          <p>Selamat Datang Di Website Sekolah Kami.</p>
        </div>


        <div className='container'>
      <div className='content'>
         <h1>SDN 5 Bajulmati</h1>
        <p>Selamat Datang Di Website Sekolah Kami.</p>
      </div>
      <div className='logo'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg/2048px-Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg.png" alt="Logo" />
      </div>
      </div>


      <div className='container'>
  <nav className='navbar'>
    <ul>
      <li className='homeMenu'>Home</li>
      <li className='homeMenu'>About</li>
      <li className='homeMenu'>Services</li>
      <li className='homeMenu'>Contact</li>
    </ul>
  </nav>
  <h1>SDN 5 Bajulmati</h1>
  <p>Selamat Datang Di Website Sekolah Kami.</p>
</div>


      </Layout>
  );
}
export default Page;
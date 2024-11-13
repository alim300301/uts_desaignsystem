// pages/index.js
import Button from '../app/componen/button';
import Container from "../app/componen/container";
const HomePage = () => {
  return (
      <div>
          <Container size="small">
              <h2>Small Container</h2>
              <p>This is a small container.</p>
          </Container>

          <Button state="success">Success</Button>
          <Button state="info">Info</Button>
          <Button state="danger">Danger</Button>
          <Button state="default">Default</Button>
          <Button state="warning">Warning</Button>
      </div>
  );
};
export default HomePage;


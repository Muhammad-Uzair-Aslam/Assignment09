import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import slideImg from './assets/imgs/slide-img.png';
import Button from './components/button/Button';
import cardItemImg from './assets/imgs/card-item-1.png'
import cardItemImg1 from './assets/imgs/card-item-2.png'
import cardItemImg2 from './assets/imgs/card-item-3.png'
import MainCard from './components/mainCard/MainCard';
import FruitList from './components/fruitList/FruitList';
import orangeImg from './assets/imgs/orange.png'
import grapesImg from './assets/imgs/grapes.png'
import gauvaImg from './assets/imgs/gauva.png'
import clientImg from './assets/imgs/client.png'
import HeadingAndDescription from './components/headingAndDescription/HeadingAndDescription';
import orangeDish from './assets/imgs/orange-dish.png'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="bg-body-tertiary" id="home">
        <div className="container">
          <div className="row g-lg-4">
            <div className="col-lg-6 col-sm-12 pt-5 ">
              <h1 className="pt-4 text-main">Welcome to our Fruit shop</h1>
              <p className="pt-3 fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eius laborum error odio,
                aliquam nobis repudiandae numquam aperiam similique
                exercitationem nam suscipit tenetur molestiae sunt blanditiis harum doloribus laudantium. Iusto.</p>
              <Button title="Shop Now" backgroundcolor="orangered" color="black" width="120px" margin="3px" padding="15px" />
              <Button title="Contact Us" backgroundcolor="black" color="white" width="120px" margin="3px" padding="15px" />
            </div>
            <div className="col-lg-6 col-sm-12 pt-5   mt-sm-4 d-flex align-items-center justify-content-end">
              <img src={slideImg} className="img-fluid w-75 mt-lg-5 mt-sm-5" alt="" />
            </div>
          </div>
        </div>
      </section>
      <HeadingAndDescription title="Our Services " description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minima aliquam iure necessitatibus quam architecto consectetur nulla distinctio ullam perferendis? Lorem ipsum dolor sit amet." />

      <div className="container">
        <div className="row mt-4">
          <MainCard title="Orange" Img={cardItemImg} />
          <MainCard title="Grapes" Img={cardItemImg1} />
          <MainCard title="Gauva" Img={cardItemImg2} />
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <Button title="Read More" backgroundcolor="black" color="white" width="120px" margin="3px" padding="15px" />
            <HeadingAndDescription title="Fresh Fruits" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam praesentium ." />
          </div>
        </div>
      </div>
      <div class="container mt-lg-5">
        <FruitList title="Best Fresh Orange" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minima aliquam iure necessitatibus quam architecto consectetur nulla distinctio ullam perferendis? Lorem ipsum dolor sit amet." Img={orangeImg} />
        <FruitList title="Best Fresh Grapes" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minima aliquam iure necessitatibus quam architecto consectetur nulla distinctio ullam perferendis? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, numquam eius repudiandae odit aliquam nesciunt.Tempora assumenda optio quidem ipsa" Img={grapesImg} height="200px" />
        <FruitList title="Best Fresh Gauva" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minima aliquam iure necessitatibus quam architecto consectetur nulla distinctio ullam perferendis? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, numquam eius repudiandae odit aliquam nesciunt. Tempora assumenda optio quidem ipsa" Img={gauvaImg} />
      </div>
      <HeadingAndDescription title="Testimonial " description="There are many variation of passengers Lorem ipsum dolor sit amet consectetur adipisicing." />
      <div className='text-center mt-5'>
        <img src={clientImg} alt="" />
      </div>
      <HeadingAndDescription title="Johnex " description="There are many variations of passenger Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda expedita modi ut 
        maiores! Delectus maiores dolore eaque at!Dolorum, maiores quasi! Eligendi voluptate quam atque?  
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, facere?"/>
      
      
      
      <div className='container'>
        <div className="row mt-5">
          <div className="col-lg-8 col-sm-12 mt-5">
            <h1>Contact Us</h1>
            <input type="text" placeholder="Name" class=" mt-2 form" />
            <input type="number" placeholder="Phone Number" class="mt-2 form" />
            <input type="email" placeholder="Email" class=" mt-2 form" />
            <input type="text" placeholder="Message" class="form mt-5" />
            <div className='mt-5'>
              <Button title="Shop" backgroundcolor="orangered" color="black" width="120px" margin="3px" padding="15px" />

            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-5 text-center">
            <img src={orangeDish} height="400px" alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
}

export default App;

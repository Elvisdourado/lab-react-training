import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import ClickablePicture from './components/ClickablePicture'
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';


function App() {
  return (

    <div className="App">
      <h4>Iteration 1 | Component: IdCard</h4>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14').toString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />


      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11').toString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <hr />
      <h4>Iteration 2 | Component: Greetings</h4>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h4>Iteration 3 | Component: Random</h4>
      <hr />
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <hr />

      <h4>Iteration 4 | Component: BoxColor</h4>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <hr />
      <h4>Iteration 5 | Component: CreditCard</h4>
      <div className='cardAlign'>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Banco do Brasil"
          owner="Elvis Dourado"
          bgColor="#ddbb55"
          color="white" />
      </div>

      <h4>Iteration 6 | Component: Rating</h4>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <hr />
      <h4>Iteration 7 | Component: DriverCard</h4>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} />
      <hr />
      <h4>Iteration 8 | Component: LikeButton</h4>

      <LikeButton /> <LikeButton />

      <hr />
      <h4>Iteration 9 | Component: ClickablePicture</h4>
      <ClickablePicture
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />
      <hr />
      <h4>Iteration 10 | State: Dice</h4>
      

    </div>


  );
}

export default App;


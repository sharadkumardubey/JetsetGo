import './App.css';
import BookingForm from './components/BookingForm';
import Flights from './components/Flights';
import Header from './components/Header';

function App() {
  return (
    <div className="bg-[url('https://unsplash.com/photos/w5zd1EdLLB0')] h-screen bg-cover bg-center">
      <Header />
      <BookingForm />
      <Flights />
    </div>
  );
}

export default App;

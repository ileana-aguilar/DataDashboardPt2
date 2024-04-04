import BookDetail from "../Components/BookDetail";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import '../App.css';

const DetailView = () => {
    return (
        <div className='app-container'>
        <div className='left'>
            <Header />
            <Navbar />
        </div>
        <div className='right'>
            <BookDetail/>
        </div>
        </div>
    );
  };
  
  export default DetailView;
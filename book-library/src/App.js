import logo from './logo.svg';
import { BookProvider } from './contexts/BooksContext';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Books from './components/Books';

function App() {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Books></Books>}></Route>
          <Route path='/*' element={<Navigate to='/' />}></Route>
        </Routes>
      </Router>
    </BookProvider >
  );
}

export default App;

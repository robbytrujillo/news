
import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card';
import axios from 'axios';

const App = () => {
  // hit API
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const url = "https://berita-indo-api-next.vercel.app/api/cnn-news/olahraga";
      const response = await axios.get(url);
      setPosts(response?.data?.data?.posts);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts(); //akan dijalankan ketika pertama kali di render
  }, []);

  console.log(posts);

  return (
    <main className="p-5 md:p-10">
      <h1 className="text-2xl font-semibold text-center">
        Berita Dunia Terkini
      </h1>
      <div className="grid gap-6 mt-12 md:grid-cols-4">
        {posts?.map((title, index) => {
          return <Card key={index} />
        })}
      </div>
    </main>
  )
}

export default App

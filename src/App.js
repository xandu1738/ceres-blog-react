import Header from "./components/Header";
import AddBlog from "./pages/AddBlog";
import React, { useState } from "react";
import "./app.css";
import BlogList from "./pages/BlogList";

function App() {
  const [enable, setEnable] = useState(true);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Introduction to Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      uploaded_by: "John Doe",
      date_published: "2023-05-10",
    },
    {
      id: 2,
      title: "Mastering the Art of Web Design",
      body: "Praesent eget lacinia risus, in congue leo.",
      uploaded_by: "Jane Smith",
      date_published: "2023-05-09",
    },
    {
      id: 3,
      title: "The Power of Minimalism",
      body: "Nulla vestibulum ante non tellus pulvinar ultrices.",
      uploaded_by: "Mark Johnson",
      date_published: "2023-05-08",
    },
    {
      id: 4,
      title: "Unlocking Creativity in Design",
      body: "Etiam ut nibh felis. Integer et lectus et nulla bibendum malesuada.",
      uploaded_by: "Emily Wilson",
      date_published: "2023-05-07",
    },
    {
      id: 5,
      title: "The Future of User Experience",
      body: "Sed at urna vestibulum, pellentesque felis vel, suscipit ligula.",
      uploaded_by: "David Brown",
      date_published: "2023-05-06",
    },
    {
      id: 6,
      title: "Harnessing the Power of Technology",
      body: "Vivamus sed volutpat purus. Nullam auctor orci quis metus commodo, sed rutrum mauris malesuada.",
      uploaded_by: "Sarah Taylor",
      date_published: "2023-05-05",
    },
    {
      id: 7,
      title: "The Art of Storytelling in Design",
      body: "Donec accumsan lorem et diam scelerisque, non condimentum justo interdum.",
      uploaded_by: "Michael Wilson",
      date_published: "2023-05-04",
    },
    {
      id: 8,
      title: "Creating Engaging User Interfaces",
      body: "Quisque interdum ligula sit amet risus vestibulum laoreet.",
      uploaded_by: "Jessica Davis",
      date_published: "2023-05-03",
    },
    {
      id: 9,
      title: "The Evolution of Web Development",
      body: "Nam tincidunt urna a nisi facilisis, nec euismod enim pulvinar.",
      uploaded_by: "Christopher Lee",
      date_published: "2023-05-02",
    },
    {
      id: 10,
      title: "Exploring Color Theory in Design",
      body: "Fusce gravida dolor eu orci tempus, non tempus risus pellentesque.",
      uploaded_by: "Olivia Brown",
      date_published: "2023-05-01",
    },
  ]);
  const onLike = (id) => {};
  const onComment = () => {};
  const onDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  const makePost = (post) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newPost = { id, ...post };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <Header
          showForm={enable}
          onToggle={() => {
            setEnable(!enable);
          }}
        />
      </header>
      <div className="form-container">
        {enable && <AddBlog onAdd={makePost} />}
      </div>
      {posts.length > 0 ? (
        <BlogList
          posts={posts}
          onLike={onLike}
          onDelete={onDelete}
          onComment={onComment}
        />
      ) : (
        "No posts to show"
      )}
    </div>
  );
}

export default App;

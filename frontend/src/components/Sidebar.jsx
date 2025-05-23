import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/drinks/categories');
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error('Error fetching categories', err);
      }
    };

    getCategories();
  }, []);

  return (
    <div className="bg-lavender">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
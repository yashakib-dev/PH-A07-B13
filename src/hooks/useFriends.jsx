"use client"
import { useEffect, useState } from "react";

const useFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://ph-a07-b13.vercel.app/data.json");
      const data = await res.json();
     

      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, []);

  return { friends, loading };
};

export default useFriends;

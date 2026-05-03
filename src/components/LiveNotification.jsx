import React, { useEffect, useState } from "react";
import "./LiveNotification.css";

const NAMES = [
  { name: "Ravi", city: "Delhi" },
  { name: "Priya", city: "Mumbai" },
  { name: "Arjun", city: "Hyderabad" },
  { name: "Sneha", city: "Pune" },
  { name: "Karthik", city: "Chennai" },
  { name: "Pooja", city: "Jaipur" },
  { name: "Rohan", city: "Ahmedabad" },
  { name: "Divya", city: "Kolkata" },
  { name: "Aman", city: "Lucknow" },
  { name: "Nisha", city: "Bangalore" },
  { name: "Vijay", city: "Surat" },
  { name: "Ananya", city: "Indore" },
  { name: "Rahul", city: "Chandigarh" },
  { name: "Meera", city: "Nagpur" },
  { name: "Suresh", city: "Bhopal" },
];

const LiveNotification = () => {
  const [notification, setNotification] = useState(null);
  const [visible, setVisible] = useState(false);

  const showNext = () => {
    const random = NAMES[Math.floor(Math.random() * NAMES.length)];
    const minsAgo = Math.floor(Math.random() * 9) + 1;
    setNotification({ ...random, minsAgo });
    setVisible(true);

    setTimeout(() => setVisible(false), 4000);
  };

  useEffect(() => {
    // First one after 4 seconds
    const initial = setTimeout(showNext, 4000);

    // Then every 12–18 seconds
    const interval = setInterval(() => {
      showNext();
    }, 15000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  if (!notification) return null;

  return (
    <div
      className={`live-notif ${visible ? "live-notif--visible" : ""}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="live-notif__icon" aria-hidden="true">🟢</div>
      <div className="live-notif__body">
        <span className="live-notif__name">{notification.name}</span> from{" "}
        <span className="live-notif__city">{notification.city}</span>
        <br />
        <span className="live-notif__action">just registered! · {notification.minsAgo}m ago</span>
      </div>
    </div>
  );
};

export default LiveNotification;

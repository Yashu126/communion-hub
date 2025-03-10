import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");
  const [newEvent, setNewEvent] = useState({ title: "", date: "", description: "", category: "Religious", location: "" });

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.description || !newEvent.location) return;
    setEvents([...events, { id: uuidv4(), ...newEvent }]);
    setNewEvent({ title: "", date: "", description: "", category: "Religious", location: "" });
  };

  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  return (
    <div className="container mt-5">
      <h1>Events</h1>
      <div className="btn-group mb-3">
        {["All", "Religious", "Social", "Charity"].map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)} className={`btn ${filter === cat ? "btn-primary" : "btn-outline-primary"}`}>{cat}</button>
        ))}
      </div>
      <div className="mb-3">
        <input type="text" placeholder="Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} className="form-control mb-2" />
        <input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} className="form-control mb-2" />
        <input type="text" placeholder="Description" value={newEvent.description} onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} className="form-control mb-2" />
        <input type="text" placeholder="Location" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} className="form-control mb-2" />
        <select value={newEvent.category} onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })} className="form-control mb-2">
          <option>Religious</option>
          <option>Social</option>
          <option>Charity</option>
        </select>
        <button onClick={addEvent} className="btn btn-success">Add Event</button>
      </div>
      <div>
        {filteredEvents.map((event) => (
          <div key={event.id} className="card mb-3 p-3">
            <h2>{event.title}</h2>
            <p>{event.date} - {event.location}</p>
            <p>{event.description}</p>
            <span className="text-muted">{event.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

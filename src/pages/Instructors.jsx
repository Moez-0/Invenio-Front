import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const instructors = [
  { id: 1, name: "Moez Souidi", expertise: "Web Development", image: "https://i.pravatar.cc/400?img=3" },
  { id: 2, name: "Chiheb Batikh", expertise: "Data Science", image: "https://i.pravatar.cc/400?img=4" },
  { id: 3, name: "Chams Mhamdi", expertise: "Cybersecurity", image: "https://i.pravatar.cc/400?img=5" },
  { id: 4, name: "Zrafi AbdSlam", expertise: "AI & Machine Learning", image: "https://i.pravatar.cc/400?img=6" },
  { id: 5, name: "Moez Souidi", expertise: "Cloud Computing", image: "https://i.pravatar.cc/400?img=7" },
];

const Instructors = () => {
  const [search, setSearch] = useState("");

  const filteredInstructors = instructors.filter(({ name, expertise }) =>
    `${name} ${expertise}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-dark px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-light mb-6">Meet Our Instructors</h1>

      {/* Search Bar (Styled like Login Input) */}
      <div className="relative max-w-lg mx-auto mb-8">
        <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-light text-xl" />
        <input
          type="text"
          placeholder="Search instructors..."
          className="w-full bg-white dark:bg-dark dark:text-light border rounded-md px-10 py-2 focus:ring-2 focus:ring-secondary outline-none shadow-sm transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Instructors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filteredInstructors.length ? (
          filteredInstructors.map(({ id, name, expertise, image }) => (
            <div key={id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
              <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
              <p className="text-sm text-gray-500">{expertise}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No instructors found.</p>
        )}
      </div>
    </div>
  );
};

export default Instructors;

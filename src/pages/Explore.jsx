import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaCode, FaBusinessTime, FaChartLine, FaShieldAlt, FaLaptopCode, FaFileInvoiceDollar, FaUserGraduate, FaCamera, FaDumbbell, FaMusic } from "react-icons/fa";

// Udemy Categories & Subcategories
const categories = [
  {
    name: "Development",
    icon: <FaCode />,
    subcategories: [
      "Web Development", "Data Science", "Mobile Development", "Programming Languages",
      "Game Development", "Software Testing", "Software Engineering", "Development Tools",
      "No-Code Development"
    ]
  },
  {
    name: "Business",
    icon: <FaBusinessTime />,
    subcategories: [
      "Entrepreneurship", "Communication", "Management", "Sales",
      "Business Strategy", "Operations", "Project Management", "E-Commerce",
      "Business Analytics & Intelligence"
    ]
  },
  {
    name: "Finance & Accounting",
    icon: <FaFileInvoiceDollar />,
    subcategories: [
      "Accounting & Bookkeeping", "Finance", "Financial Modeling",
      "Investing & Trading", "Cryptocurrency & Blockchain"
    ]
  },
  {
    name: "IT & Software",
    icon: <FaShieldAlt />,
    subcategories: [
      "IT Certification", "Network & Security", "Hardware",
      "Operating Systems & Servers"
    ]
  },
  {
    name: "Marketing",
    icon: <FaChartLine />,
    subcategories: [
      "Digital Marketing", "SEO", "Social Media Marketing", "Branding",
      "Marketing Analytics", "Content Marketing", "Growth Hacking"
    ]
  },
  {
    name: "Personal Development",
    icon: <FaUserGraduate />,
    subcategories: [
      "Productivity", "Leadership", "Personal Finance", "Career Development",
      "Happiness", "Time Management", "Memory & Study Skills"
    ]
  },
  {
    name: "Photography & Video",
    icon: <FaCamera />,
    subcategories: [
      "Digital Photography", "Portrait Photography", "Video Editing",
      "Commercial Photography"
    ]
  },
  {
    name: "Health & Fitness",
    icon: <FaDumbbell />,
    subcategories: [
      "Fitness", "Nutrition & Diet", "Mental Health",
      "Martial Arts", "Yoga", "Meditation"
    ]
  },
  {
    name: "Music",
    icon: <FaMusic />,
    subcategories: [
      "Instruments", "Music Production", "Music Theory",
      "Vocal Training", "DJing"
    ]
  }
];

const Explore = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const navigate = useNavigate();

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const handleSearch = (subcategory) => {
    navigate(`/courses?search=${encodeURIComponent(subcategory)}`);
  };

  return (
    <div className="font-inter min-h-screen bg-white dark:bg-dark px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-accent dark:text-light mb-6">Explore Courses by Category</h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg">
            {/* Category Header */}
            <button
              className="flex justify-between items-center w-full p-4 text-lg font-semibold text-accent"
              onClick={() => toggleCategory(index)}
            >
              <div className="flex items-center gap-3">
                <span className="text-secondary text-2xl">{category.icon}</span>
                {category.name}
              </div>
              {openCategory === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* Subcategories Dropdown */}
            {openCategory === index && (
              <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
                <ul className="space-y-2">
                  {category.subcategories.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-gray-600 hover:text-primary cursor-pointer transition"
                      onClick={() => handleSearch(sub)}
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;

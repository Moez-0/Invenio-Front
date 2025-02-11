import React from "react";

const CourseCard = ({ id, image, title, instructor, rating, reviews, price }) => {
  return (
    <a
      className="border border-gray-500/30 dark:text-light pb-6 overflow-hidden rounded-lg block hover:shadow-lg transition-shadow"
      href={`/course/${id}`}
      data-discover="true"
    >
      <img className="w-full" src={image} alt={title} />
      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-gray-500 dark:text-light">{instructor}</p>
        <div className="flex items-center space-x-2">
          <p>{rating}</p>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                className="w-3.5 h-3.5"
                src={
                  index < rating
                    ? "data:image/svg+xml,%3csvg%20width='18'%20height='17'%20viewBox='0%200%2018%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.52447%200.463525C8.67415%200.00287008%209.32585%200.00287008%209.47553%200.463525L11.1329%205.56434C11.1998%205.77035%2011.3918%205.90983%2011.6084%205.90983H16.9717C17.4561%205.90983%2017.6575%206.52964%2017.2656%206.81434L12.9266%209.96681C12.7514%2010.0941%2012.678%2010.3198%2012.745%2010.5258L14.4023%2015.6266C14.552%2016.0873%2014.0248%2016.4704%2013.6329%2016.1857L9.29389%2013.0332C9.11865%2012.9059%208.88135%2012.9059%208.70611%2013.0332L4.3671%2016.1857C3.97524%2016.4704%203.448%2016.0873%203.59768%2015.6266L5.25503%2010.5258C5.32197%2010.3198%205.24864%2010.0941%205.07339%209.96681L0.734384%206.81434C0.342527%206.52964%200.543915%205.90983%201.02828%205.90983H6.39159C6.6082%205.90983%206.80018%205.77035%206.86712%205.56434L8.52447%200.463525Z'%20fill='%23FF532E'/%3e%3c/svg%3e"
                    : "data:image/svg+xml,%3csvg%20width='14'%20height='12'%20viewBox='0%200%2014%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.03905%200.855893L8.26413%204.62631L8.32026%204.79905H8.50189L12.4663%204.79905L9.25904%207.12929L9.11209%207.23606L9.16822%207.4088L10.3933%2011.1792L7.18599%208.84897L7.03905%208.74221L6.8921%208.84897L3.6848%2011.1792L4.90988%207.4088L4.96601%207.23606L4.81906%207.12929L1.61176%204.79905L5.5762%204.79905H5.75784L5.81397%204.62631L7.03905%200.855893Z'%20stroke='%237E7E7E'%20stroke-width='0.5'/%3e%3c/svg%3e"
                }
                alt="star"
              />
            ))}
          </div>
          <p className="text-gray-500">({reviews})</p>
        </div>
        <p className="text-base font-semibold text-gray-800 dark:text-light">${price}</p>
      </div>
    </a>
  );
};

export default CourseCard;

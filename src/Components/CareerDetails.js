import React from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Careers from "./Careers";
function CareerDetails({ careerData, careerId }) {
  console.log(careerId);
  console.log(careerData);
  const currentCareerDetail = careerData.find(
    (Career) => Career.id === careerId
  );
  console.log(currentCareerDetail);

  if (!currentCareerDetail) {
    return <h1>LOADING...</h1>;
  }
  return (
    <div>
      <div className="max-w-2xl px-8 mt-4 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Jan 15, 2022
          </span>
          <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
            JavaScript
          </a>
        </div>
        <div className="mt-2">
          <a
            href="https://stackdiary.com/"
            className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          >
            How to sanitiz array() in JS
          </a>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {currentCareerDetail.title}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Apply
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Save
          </button>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read more ⟶
          </a>
          <div className="flex items-center">
            <img
              src="https://stackdiary.com/140x100.png"
              alt="Author Photo"
              className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
            />
            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
              John Doe
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-2xl px-8 mt-4 text-left py-4 mx-auto">
        <p>
          Since its founding over 80 years ago, Krispy Kreme’s focus has
          remained the same - making fresh, premium quality doughnuts inspired
          by their founder’s original recipe. The brand’s iconic Hot Light lets
          guests know when doughnuts are being made fresh in shop so they can
          enjoy hot doughnuts fresh off the line. To make Krispy Kreme’s in-shop
          experience even sweeter, many shops across the globe feature the
          brands one-of-a-kind doughnut theatre, an immersive, interactive
          experience through which guests can see Krispy Kreme’s
          melt-in-your-mouth doughnuts being made right before their eyes. To be
          successful in this role, you should be well-organized, have
          exceptional time management skills, discretion, and be able to act
          without guidance.
        </p>

        <p></p>
      </div>
    </div>
  );
}

export default CareerDetails;

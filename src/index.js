import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="image-cropped"
        src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipes%2F2019-10-recipe-20-minute-cajun-chicken-pasta%2F20-Minute-Cajun-Chicken-Pasta_018"
        alt="Cajun Chicken Pasta"
      />
      <img
        className="image-cropped"
        src="https://www.simplyrecipes.com/thmb/XqL0ID3OqGJX2HnLMHT-5fKgsRo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Pinterest-Trends-LEAD-47311e5183d041de9a3cc5000daea945.jpg"
        alt="Pinterest Recipe"
      />
      <img
        className="image-cropped"
        src="https://www.eatingwell.com/thmb/oqK9f12ugxcMxZ8grhvjGG1gmJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/goatcheesepuffpastry-2000-b490705d487c431fa199d139ba8da845.jpg"
        alt="Goat Cheese Puff Pastry"
      />
    </div>
  </div>,
  document.getElementById("root")
);

import { Link } from "react-router-dom";
import "./Description.css";

const Description=()=> {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://blog.orsys.fr/les-carnets/wp-content/uploads/2020/01/Sujet2_blog@2x.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
      Let's explore the concept of AI in agriculture !
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>27th april 2018</span>
        </div>
        <p className="singlePostDesc">
        Artificial intelligence brings new tools and disrupts existing processes in very 
        many fields such as health, hotels, industry and management. In this dossier,
    we are going to focus on agriculture because this sector has been experiencing a real 
         digital revolution responding to economic challenges,
         current social and environmental.

        We often tend to associate technology with large urban metropolises, 
         to finance or aeronautics and to think that the trades of the earth are deprived of it. 
        The image of the farmer mowing his wheat by hand has however made its time and the farmers 
        are today mostly hyperconnected professionals using state-of-the-art equipment 
        of technology.
        
Artificial intelligence appears to be one of the solutions to improve agricultural productivity. 
In this article, I will explain how it is used in agriculture, the common applications of AI that have been used. I will conclude by talking about the possibilities open to African countries with high agricultural potential at the moment. 
or we are experiencing a digital revolution in all sectors of activity.

        </p>
      </div>
    </div>
  );
}
export default Description;
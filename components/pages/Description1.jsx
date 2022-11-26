import { Link } from "react-router-dom";
import "./Description1.css";

const Description1=()=> {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://www.springwise.com/wp-content/uploads/2019/10/innovationretailtiliter-tech-ai-checkout.png"
          alt=""
        />
        <h1 className="singlePostTitle">
             Automatic product recognition
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>27th april 2018</span>
        </div>
        <p className="singlePostDesc">
        On-device Supermarket Product Recognition
Tuesday, August 11, 2020
Posted by Chao Chen, Software Engineer, Google Research

One of the greatest challenges faced by users who are visually impaired is identifying packaged foods, both in a grocery store and also in their kitchen cupboard at home. This is because many foods share the same packaging, such as boxes, tins, bottles and jars, and only differ in the text and imagery printed on the label. However, the ubiquity of smart mobile devices provides an opportunity to address such challenges using machine learning (ML).

In recent years, there have been significant improvements in the accuracy of on-device neural networks for various perception tasks. When coupled with the increased computing power in modern smartphones, it is now possible for many vision tasks to yield high performance while running entirely on a mobile device. The development of on-device models such as MnasNet and MobileNets (based on resource-aware architecture search) in combination with on-device indexing allows one to run a full computer vision system, such as labeled product recognition, entirely on-device, in real time.

Leveraging developments such as these, we recently released Lookout, an Android app that uses computer vision to make the physical world more accessible for users who are visually impaired. When the user aims their smartphone camera at the product, Lookout identifies it and speaks aloud the brand name and product size. To accomplish this, Lookout includes a supermarket product detection and recognition model with an on-device product index, along with MediaPipe object tracking and an optical character recognition model. The resulting architecture is efficient enough to run in real-time entirely on-device.

Why On-Device?
A completely on-device system has the benefit of being low latency and with no reliance on network connectivity. However, this means that for a product recognition system to be truly useful to the users, it must have a on-device database with good product coverage. These requirements drive the design of the datasets used by Lookout, which consist of two million popular products chosen dynamically according to the user’s geographic location.

Traditional Solutions
Product recognition using computer vision has traditionally been solved using local image features extracted by, for example, the SIFT algorithm. These non ML-based approaches provide fairly reliable matching but are storage intensive per index image (typically ranging from 10KB to 40KB per image) and are less robust to poor lighting and blur in images. Additionally, the local nature of these descriptors means that it typically does not capture more global aspects of the product’s appearance.

An alternative approach that has a number of advantages would be to use ML and run an optical character recognition (OCR) system over the query image and database images to extract the text present on the product packaging. The text on the query image can be matched to the database using N-Grams to be robust to OCR errors such as spelling mistakes, misrecognitions, failed recognition of words on product packaging. N-Grams can also allow for partial match between query document and index document using measures such as Jaccard similarity coefficient, as opposed to requiring an exact match. However, with OCR, the index document size can grow very large since one would need to store N-Grams for product packaging text along with other signals like TF-IDF. Furthermore, the reliability of the matches is a concern with the OCR+N-Gram approach since it can easily over trigger in situations where there are a lot of common words present on the packaging of two different products.
The on-device system outlined here can be used to enable a spectrum of new in-store experiences, including the display of detailed product information (nutritional facts, allergens, etc.), customer ratings, product comparisons, smart shopping lists, price tracking, and more. We are excited to explore some of these future applications, while continuing research into advancing the quality and robustness of the underlying on-device models.



        </p>
      </div>
    </div>
  );
}
export default Description1;
import React, { useState ,useEffect, useRef , useCallback } from "react";
import "./Camera.css";
import ReactToPrint from 'react-to-print';
import {ArrowDown} from "react-feather";
import { toPng, toJpeg } from 'html-to-image'
import Pdf from 'react-to-pdf';
import axios from  "axios";
import canvasToImage from 'canvas-to-image';
import html2canvas from 'html2canvas';
import Webcam from 'react-webcam';

function Camera() {
  let videoRef = useRef(null);
 
  let photoRef = useRef(null)
 
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getVideo();
  }, [videoRef]);
  useEffect(() => {
    (async () => {
  
      if (photoRef.current) {
        const formData = new FormData();
        formData.append('image', photoRef.current);

        const response = await fetch('/classify', {
          method: "POST",
          body: formData,
        });

        if (response.status === 200) {
          const text = await response.text();
          setResult(text);
        } else {
          setResult("Rotten tomato");
        }
      }
    })();
  }, []);
    
  const[result, setResult] = useState('');

  const takePicture = () => {
    
    const width = 400
    const height = width / (16 / 9)
    
    let video = videoRef.current
 
    let photo = photoRef.current
 
    photo.width = width
 
    photo.height = height
 
    let ctx = photo.getContext('2d')
 
    ctx.drawImage(video, 0, 0, width, height)}
  useEffect(() => {
    getVideo();
  }, [videoRef]);
  
  const handleDownloadImage = async () => {
    const element = photoRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  return (
    <div className="container">
      <video ref={videoRef} className="container1"></video>
      <div className="box-camera">
      <button onClick={takePicture} className="btn">Screenshot</button>
      <button onClick={handleDownloadImage} className="btn"> download !</button>
      <div className="result">
      <h1> Currently seeing: {result}</h1></div>
      </div>
      <canvas className="box" ref={photoRef} >
      </canvas>
    
    </div>
);
}
export default Camera;
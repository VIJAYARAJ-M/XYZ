import React, { Component,useEffect } from "react";
//import ReactDOM from "react-dom";
import FunnelGraph from "funnel-graph-js";

//import "../cssfiles/main.css";
//import "../cssfiles/theme.css";
//import "../cssfiles/styles.css";
import { useState } from "react";
import "./style.css";







function FeaturedInfo() {
  useEffect(() => {
    
    fetch('http://127.0.0.1:8000/data',{
      method:"GET",
    })
    .then(Res=>Res.json())
    .then(response=>{
      const object = JSON.stringify(response)
      const result = JSON.parse(object)
      
      //setdata(result )
     //console.log('result', result)
      
      
     /* var d = [] 
      Object.keys(result).map((k) => {
        //console.log('k', k)
        d.push([result[k]])
      });*/
      //console.log('d', d)
      var labels =[]
      result.map((label)=>{
        console.log("label",label.title)
        if(label.values){
          labels.push(label.title)
        }
      })
      console.log("labels", labels)


      var d = [] 
     result.map((item) => {
      
        if(item.values){
          
          //console.log('k', item)
          d.push([item.values])
          //console.log(" title",item.title)
        }
      }); 
    console.log("d", d)





    const data = {
      labels:labels,
      subLabels: ["Deal Stages"],
      colors: [['#FFB178', '#FF78B1', '#FF3C8E']],
      values:d
    };

    const graph = new FunnelGraph({
      container: ".App",
      gradientDirection: "horizontal",
      data: data,
      displayPercent: true,
      direction: "Horizontal",
      width: 920,
      height: 150,
      subLabelValue: "values"
    });

    graph.draw();

  });
  }, []);

  return(
          <div className="App" /> 
          );
}
  
 export default FeaturedInfo;

import React  from "react"
import { useEffect, useState } from "react";
import classnames from "classnames";
import Chart from "chart.js";
import {FcPicture} from "react-icons/fc"
import "./Card.css";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
} from "reactstrap";

import Header from "components/Headers/Header.js";
import { NavDropdown, Tab, Tabs } from "react-bootstrap";

import "./inter.css";
import 'bootstrap-daterangepicker/daterangepicker.css';
import FeaturedInfo from "Funnel/funnel";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { ProgressCircular, ProgressLinear } from "ui-neumorphism";
import 'ui-neumorphism/dist/index.css'
import {BsFillPersonFill,BsStack,BsPersonLinesFill} from "react-icons/bs"
import ReactApexChart from "react-apexcharts";
//import 'react-date-range/dist/styles.css'; // main style file
//import 'react-date-range/dist/theme/default.css'; // theme css file
import Select from "react-select"
import Home from "../views/examples/Home"
import Dashboard from "./examples/Dashboard";
import Candidates from "./examples/Candidates";
import Consultant from "./examples/Consultant";
import Production from "./examples/Production";
import Jobs from "./examples/Jobs";
//import DateRangePicker from "../DatePicker/DateRange"

const series2= [ {
  name: 'Deal Count',
  data: [11, 32, 45, 32, 34, 52, 41,52,33,21,45,60]
}]
const options2 = {
  chart: {
    height: 350,
    type: 'area',
   
    toolbar: {
      show: !1
    },
    
    
    zoom: {
      enabled: false
    }
  },
  
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Monthly Custom Calculations',
    align: 'center',
    style:{
      color:"white",
    
      
    },
    
  },
  dataLabels: {
    enabled: false,
    /*formatter: function (val) {
      return val + "%";
    },*/
  },
  tooltip: {
    enabled: true,
    y: {
      formatter: function(value) {
              return  value + "%";
      }
    },           
  },
  yaxis: {
    

    labels: {
      show: true,
     
      formatter: function (val) {
        return val + "%";
      },
      style:{
        colors:"white",
        
      },

    }
  
  },
 
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nev','Dec'],
    labels:{
      style:{
        colors:"white",
        
      },
  }
  }
}
const series3 = [100, 70, 50, 30, 10]
const options3 = {
  chart: {
    width: 380,
    type: 'pie',
    //borderWidth:"transparent",
    
    
  },
  stroke: {
    width: 0
  },
  //colors: ['#D6CFC7', '#BEBDB8', '#999DA0', '#877F7D','#808080'],
  labels: ['CV Sent', '1st Interview', '2nd Interview', '3rd Interview', 'Offers'],
  
  /*fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0,
  opacityFrom: 0.7,
  opacityTo: 0.9,
  stops: [0, 90, 100]
    }
  },*/

  legend: {
    //show:true,
    position: 'bottom',
    
    //horizontalAlign: 'center',
  },
  
  dataLabels: {
    enabled: true,
     style: {
      fontSize: '15px',
      colors: ['#000']
  }
    },
    
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      
    }
  }]
}
const select = [
  { value: 'CV Sent', label: 'CV Sent' },
  { value: '1st Interview', label: '1st Interview' },
  { value: '2nd Interview', label: '2nd Interview' },
  { value: '3rd Interview', label: '3rd Interview' },
  
]
const select2 = [
  
  { value: '1st Interview', label: '1st Interview' },
  { value: '2nd Interview', label: '2nd Interview' },
  { value: '3rd Interview', label: '3rd Interview' },
  { value: 'Offers', label: 'Offers' },
 
]
 const colourOptions = [
  { value: 'CV Sent', label: 'CV Sent', color: '#00B8D9', isFixed: true },
  { value: '1st Interview', label: '1st Interview', color: '#00B8D9',  },
  { value: '2nd Interview', label: '2nd Interview', color: '#00B8D9',  },
  { value: '3rd Interview', label: '3rd Interview', color: '#00B8D9',  },
  { value: 'Offers', label: 'Offers', color: '#00B8D9', isFixed: true },
  { value: 'All', label: 'All', color: '#00B8D9', isFixed: true },
];
const month = [
  
  { value: 'Jan', label: 'Jan' },
  { value: 'Feb', label: 'Feb' },
  { value: 'Mar', label: 'Mar' },
  { value: 'Apr', label: 'Apr' },
  { value: 'May', label: 'May' },
  { value: 'Jun', label: 'Jun' },
  { value: 'Jul', label: 'Jul' },
  { value: 'Aug', label: 'Aug' },
  { value: 'Sep', label: 'Sep' },
  { value: 'Oct', label: 'Oct' },
  { value: 'Nev', label: 'Nev' },
  { value: 'Dec', label: 'Dec' },
 
] 
const year = [
  {value:"2021", label:'2021'},
  {value:"2022", label:'2022'}
]

const table = [{
  dealdate :"12-10-2022",
  consultant :"Bluebase",
  client:"Shiash info solution chennai",
  candidate:"Ajai",
  fee:"$22000",
  stage:"1st",
  pipevalue:"2200",
  source:"Qui"
},
{
  dealdate :"13-10-2022",
  consultant :"Bluebase",
  client:"orien info solution DLF",
  candidate:"vijay",
  fee:"$26000",
  stage:"2nd",
  pipevalue:"5000",
  source:"Qui"
},
{
  dealdate :"13-10-2022",
  consultant :"Bluebase",
  client:"orien info solution DLF",
  candidate:"vijay",
  fee:"$26000",
  stage:"2nd",
  pipevalue:"5000",
  source:"Qui"
},
{
  dealdate :"13-10-2022",
  consultant :"Bluebase",
  client:"orien info solution DLF",
  candidate:"vijay",
  fee:"$26000",
  stage:"2nd",
  pipevalue:"5000",
  source:"Qui"
},
{
  dealdate :"13-10-2022",
  consultant :"Bluebase",
  client:"orien info solution DLF",
  candidate:"vijay",
  fee:"$26000",
  stage:"2nd",
  pipevalue:"5000",
  source:"Qui"
},
{
  dealdate :"13-10-2022",
  consultant :"Bluebase",
  client:"orien info solution DLF",
  candidate:"vijay",
  fee:"$26000",
  stage:"2nd",
  pipevalue:"5000",
  source:"Qui"
},
{
  dealdate :"13-10-2022",
  consultant :"Bluebase",
  client:"orien info solution DLF",
  candidate:"vijay",
  fee:"$26000",
  stage:"2nd",
  pipevalue:"5000",
  source:"Qui"
},
]

const dealstage =[{
                      title:"cv sent",
                      value:6,
                      members:[
                        "gayathri",
                        "Akshy",
                        "saravanan",
                        "sudhakar",
                        "ajai",
                        "kalai",
                      ]
                  },
                  {
                    title:"1st interview",
                    value:3,
                    members:[
                      "gayathri",
                      "Akshy",
                      "saravanan",
                      
                    ]
                },
  
]

const seriesline= [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}]
const optionsline = {
  chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
}

const seriesdonut= [55, 40, 30, 20, 10]
const optionsdonut = {
              chart: {
                type: 'donut',
              },
              stroke: {
                width: 0
              },
              labels: ['CV Sent', '1st Interview', '2nd Interview', '3rd Interview', 'Offers'],
              colors: ['#00cccc','#adb2bd',  '#007bff','#6f42c1','#17a2b8',],
              legend: {
                display: true,
                position: "bottom",
                labels: {
                  usePointStyle: true,
                  colors: "#fff",
                },
              },
              
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                   
                  },
                  
                }
              }]
            }
            
const series4 = [{
              name: 'Deal Count',
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66,55,64,53,]
            }]
const options4 = {
              chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                  show: !1
                },
              },
              title: {
                text: 'Monthly Custom Calculations',
                align: 'center',
                style:{
                  color:"white",
                
                  
                },
                
              },
              colors:['#17a2b8'],
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '55%',
                  endingShape: 'rounded'
                },
              },
              dataLabels: {
                enabled: false,
                
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
              xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Oct','Nev','Dec'],
                labels:{
                  style:{
                    colors:"white",
                    
                  },
            },
              },
              yaxis: {
                /*title: {
                  text: "hi",
                  align: 'left',
                  margin: 10,
                  offsetX: 0,
                  offsetY: 0,
                  floating: false,
                  style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',
                    fontFamily:  undefined,
                    color:  '#fff',
                  },
              },*/
                labels:{
                    style:{
                      colors:"white",
                      
                    },
              },
              },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return  val + "%"
                  }
                }
              }
            }
                     
            

/*const selectionRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
}


const handleSelect = (ranges) =>{
  console.log(ranges);
  // {
  //   selection: {
  //     startDate: [native Date Object],
  //     endDate: [native Date Object],
  //   }
  // }
}
*/


const Index = (props) => {
  
 const [getdealdetails, setdealdetails] = useState ([]);

 const [getdata2, setdata2] = useState([]);
 console.log(getdata2)
 
  
  
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/dealdetails/',{
      method:"GET",
    })
    .then(Res=>Res.json())
    .then(response=>{
      const obj1 = JSON.stringify(response)
      const output1 = JSON.parse(obj1)
      
      setdealdetails(output1)
      //console.log(output1)
      
    });
   
  },[])



  useEffect(()=>{
    fetch('http://127.0.0.1:8000/data',{
      method:"GET",
    })
    .then(Res=>Res.json())
    .then(response=>{
      
      const obj2 = JSON.stringify(response)
      const output2 = JSON.parse(obj2)
      var bgColors = ['#19335A', '#19335A', '#19335A', '#19335A', '#19335A']
      //  var bgColors = [
      //   'linear-gradient(to right, #44BD95 0%, #C7E08E 100%)',
      //    'linear-gradient(to right, #21507B 0%, #88AFDD 100%)',
      //    'linear-gradient(to right, #44BD95 0%, #C7E08E 100%)',
      //    'linear-gradient(to right, #21507B 0%, #88AFDD 100%)',
      //    'linear-gradient(to right, #44BD95 0%, #C7E08E 100%)'
      //  ]
       output2.forEach((item, idx)=>{
        item.bg = bgColors[idx]
      //   item.ic = '<FaBeer/>'
       })

      console.log(output2)
      setdata2(output2)
      
      
    });
   
  },[])

  return (
    <>
        
        
       {/* <Header />   */}
    
      {/* Page content */}
      
      <Container className="pb-8 pt-5 pt-md-8" fluid style={{backgroundColor:"#19335A"}}>

        
        <Tabs defaultActiveKey="home" className="mt--4">
          <Tab eventKey="home" title="Home">
           <Home/>
          </Tab>
          <Tab eventKey="pipeline" title="Interview Pipeline">
           <Dashboard/>
          </Tab>
          <Tab eventKey="candidates" title="Candidates">
           <Candidates/>
          </Tab>
          <Tab eventKey="consultant" title=" Deals By Consultant">
          <Consultant/>
          </Tab>
          <Tab eventKey="production" title="Consultant Production">
           <Production/>
          </Tab>
          <Tab eventKey="jobs" title="Job Openings">
           <Jobs/>
          </Tab>
          
        </Tabs>

       
        
      
      </Container>
      
    </>
  );
};

export default Index;

import React from "react";
import { useEffect, useState } from "react";
import classnames from "classnames";
import Chart from "chart.js";
import {FcPicture} from "react-icons/fc"
import "../../views/Card.css";
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

import "../../views/inter.css";
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
// import Home from "../views/examples/Home"
// import Dashboard from "./examples/Dashboard";
//import DateRangePicker from "../DatePicker/DateRange"

import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes"

const options = [{
  "id": 1,
  "value": "9ce42304-b732-4791-9731-6f299b6df8c7",
  "label": "Infosys"
}, {
  "id": 2,
  "value": "90419f06-7d07-45c8-bcec-d675096fe27f",
  "label": "Zoho"
}, {
  "id": 3,
  "value": "a23521da-0a48-4ef6-baa2-d727704f65c2",
  "label": "Shiash"
}, {
  "id": 4,
  "value": "34b2b58a-0123-49e2-b2de-1eef0922139b",
  "label": "Wibro"
},]


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
  const table1 = [{
                company :"Orien",
                role:"Java Developer",
                applicant:"0",
                firstInterview:"2",
                seconsinterview:"2",
                thirdinterview:"1",
                offers:"1",
                
              },
              {
                company :"Orien",
                role:"Java Developer",
                applicant:"0",
                firstInterview:"2",
                seconsinterview:"2",
                thirdinterview:"1",
                offers:"1",
              },
              {
                company :"Itech",
                role:"python Developer",
                applicant:"5",
                firstInterview:"2",
                seconsinterview:"2",
                thirdinterview:"1",
                offers:"1",
              },
              {
                company :"bluebase",
                role:"Java Developer",
                applicant:"0",
                firstInterview:"2",
                seconsinterview:"2",
                thirdinterview:"1",
                offers:"1",
              },
              {
                company :"zoho",
                role:"ReactJS",
                applicant:"0",
                firstInterview:"2",
                seconsinterview:"2",
                thirdinterview:"1",
                offers:"1",
              },
              {
                company :"Shiash",
                role:"Java Developer",
                applicant:"0",
                firstInterview:"2",
                seconsinterview:"2",
                thirdinterview:"1",
                offers:"1",
              },
              {
                company :"Orien",
                role:"C++ Developer",
                applicant:"1",
                firstInterview:"2",
                seconsinterview:"2",
                thirdinterview:"1",
                offers:"1",
              },
              ]
const departmentseries = [44, 55, 30, 40, 3]
const departmentoptions = {
                chart: {
                  width: 380,
                  type: 'donut',
                  dropShadow: {
                    enabled: true,
                    color: '#111',
                    top: -1,
                    left: 3,
                    blur: 3,
                    opacity: 0.2
                  }
                },
                stroke: {
                  width: 0,
                },
                plotOptions: {
                  pie: {
                    donut: {
                      labels: {
                        show: true,
                        total: {
                          showAlways: true,
                          show: true
                        }
                      }
                    }
                  }
                },
                labels: ["Developer", "Voice", "Testing", "Analytics", "HR"],
                dataLabels: {
                  dropShadow: {
                    blur: 3,
                    opacity: 0.8,
                    style:{
                       color:"#fff",
                    },
                  }
                },
                fill: {
                type: 'pattern',
                  opacity: 1,
                  pattern: {
                    enabled: true,
                    style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
                  },
                },
                states: {
                  hover: {
                    filter: 'none'
                  }
                },
                theme: {
                  palette: 'palette2'
                },
                title: {
                  text: "Departments Wise Vacancies",
                  style:{
                    color:"#fff",
                  }
                },
                responsive: [{
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 200
                    },
                    legend: {
                      position: 'bottom',
                      labels: {
                        usePointStyle: true,
                        colors: "#fff",
                        
                      },
                    }
                  }
                }]
              }
const card =[
  {
    h5:"cv",
    h4:"1st",
  },
  {
    h5:"cv",
    h4:"1st",
  },
]
const renderCard = (card, index) => {
                return (
                  <Col  className="" >
                    <Card className="" style={{backgroundImage:"linear-gradient(to right, #FFFBFF ,#D4D9DD )",
                    height:"200px",width:"200px",borderRadius:"50%",border:"  solid #D9D9D9",
                    /*borderImage:" linear-gradient(to right, #bd1d58, #40db19)10",*/
                    boxShadow:"8px 8px 10px 0px rgb( 120 120 120/ 80%), -8px -8px 10px 3px rgb(249 250 252/ 100%)"}}>
                        <Row className="p-4">
                            <Col>
                            <Card  style={{backgroundImage:"linear-gradient(to right,#D4D9DD, #FFFBFF  )",height:"150px",width:"150px",borderRadius:"50%",
                            border:"solid #D1D2D3"}}>
                                <Row className="p-3">
                                    <Col>
                                    <Card className="text-center" key={index} style={{backgroundColor:"#EDEEF0",border:"solid #F2CE3E",
                                    height:"120px",width:"120px",borderRadius:"50%",marginLeft:"-4px",marginTop:"-4px"}}>
                                        <CardBody className="  ">
                                            <Row className="justify-content-center d-flex align-items-center"> 
                                                <span><BsFillPersonFill size="2rem"/></span>
                                            </Row>
                                              <Row className="justify-content-center d-flex align-items-center">
                                              <h5>{card.h5}</h5>
                                              </Row>
                                            <Row className="justify-content-center d-flex align-items-center">
                                              <h4>{card.h4}</h4>
                                            </Row>
                                            
                                        </CardBody>
                                    </Card>
                                    </Col>
                                </Row>
                            </Card>
                            </Col>

                        </Row>
                    </Card>
                  </Col>
                );
              };
              
            
                       
              
  
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

export default function Dash(){
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


  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    setSelectedOptions([{ label: "All", value: "*" }, ...options]);
  }, []);

  function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
    if (value && value.some((o) => o.value === "*")) {
      return `${placeholderButtonLabel}: All`;
    } else {
      return `${placeholderButtonLabel}: ${value.length} selected`;
    }
  }

  function onChange(value, event) {
    if (event.action === "select-option" && event.option.value === "*") {
      this.setState(this.options);
    } else if (
      event.action === "deselect-option" &&
      event.option.value === "*"
    ) {
      this.setState([]);
    } else if (event.action === "deselect-option") {
      this.setState(value.filter((o) => o.value !== "*"));
    } else if (value.length === this.options.length - 1) {
      this.setState(this.options);
    } else {
      this.setState(value);
    }
  }

    return(
        <div>
            <div style={{backgroundColor:"#19335A", height:"auto" }}>
                <Row className="justify-content-center mt-2 ">
                <h2 style={{color:"#fff"}}>Interview Pipeline</h2>
                </Row>
                <Row>
                            <Col>
                            <Card className="p-3"
                            style={{/*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/border:"0px",
                            backgroundColor:"#00072b"}}>
                                <Row>
                                
                                <Col className=" d-flex">
                                    
                                    <div className="col-lg-12">
                                    <Row>
                                        <div className="col-lg-2" >
                                            <div className="justify-content-start d-flex">
                                            <h4 style={{color:"#fff"}}>From</h4>
                                            </div>
                                            <div>
                                            <input className="css-1s2u09g-control"  type='date'></input>
                                            </div>
                                        </div>

                                        <div className="col-lg-2"  style={{marginLeft:""}}>
                                            <div   className="justify-content-start d-flex">
                                            <h4 style={{color:"#fff"}}>To</h4>
                                            </div>
                                            <div >
                                            <input className="css-1s2u09g-control" type='date'></input>
                                            </div>
                                        </div>

                                        <div className="col-lg-2">
                                          <div><h4 className="text-white">Company</h4></div>
                                          <div>
                                          <ReactMultiSelectCheckboxes
                                              options={[{ label: "All", value: "*" }, ...options]}
                                              placeholderButtonLabel="Select"
                                              getDropdownButtonLabel={getDropdownButtonLabel}
                                              value={selectedOptions}
                                              onChange={onChange}
                                              setState={setSelectedOptions}
                                            />
                                          </div>
                                          
                                        </div>

                                        <div className="col-lg-6 justify-content-end d-flex" style={{marginLeft:""}}>
                                            <Button className="Button">Apply</Button>
                                        </div>
                                        </Row>
                                    </div>
                                </Col>
                                </Row>
                            </Card>
                            </Col>
                </Row>
                <Row className="mt-2 no-gutters ">
                <Col lg={6} className="p-1">
                <Card className="p-1" style={{backgroundColor: "#002151"}} >

                        
                        <Row className="">
                        <Col>
                            <Card className="p-4" 
                            style={{backgroundColor:"#00072b",
                            border:"0px"}} >
                            <Row>
                                <Col>
                                <h3 className="text-white">Deal Stages</h3>
                                </Col>
                            </Row>
                            <Row>
                            {getdata2.map((item, index)=>(
                                    item.values !==0 &&
                                //getdata2[item.values]!==0 &&
                            <Col key={index} >
                                
                                            <Card className="align-items-center check" style={{backgroundColor:item.bg,
                                            border:"0px"}} >
                                            <div class="dropdown-content">
                                            {item.cv_name.map((items, index)=>(
                                            <a key={index}>
                                            {items}
                                                
                                            </a>
                                            ))}
                                            </div>
                                            
                                            <Row>
                                            <div>
                                            <h6 className="text-white" >
                                                {item.title}
                                            </h6>
                                            </div>
                                            </Row>
                                        
                                                
                                            <Row>
                                            <div>      
                                            <h5 className="text-white">{item.values}</h5>
                                            </div>
                                            </Row>
                                                
                                        
                                            </Card>
                                        
                                        </Col>
                                    
                                        ))}
                            </Row>
                            <Row className="" style={{marginTop:"72px"}}>
                            <Col className="mb-5 mb-xl-0" xl="12" >
                            <Card className="cardbody " 
                            style={{/*boxShadow:"8px 8px 7px 0px rgb( 120 120 120/ 80%), -5px -6px 5px 0 rgb(255 255 255 / 90%)"*/
                            backgroundColor:"#00072b",height:"290px",/*boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff",*/
                            /*backgroundImage:"linear-gradient(to right, #ffd89b , #19547b )"*/
                            // backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",
                            border:"0px"}}>
                                
                            
                                {/* Chart */}
                                <div className="chart">
                                    <FeaturedInfo/>
                                </div>
                                
                            </Card>
                            </Col>
                            
                            </Row>
                            <Row className="mt-2"> 
                                <Col className=""> 
                                <Card className="p-3  " 
                                style={{height:"80px",backgroundColor:"#00072b",
                                                /*boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"*/
                                                /*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
                                                border:"0px"}}>
                                    <ul class="breadcrumb">
                                    <li><h2>3%</h2></li>
                                    </ul>
                                </Card>
                                </Col>
                            </Row>
                
                            </Card>
                        </Col>
                        </Row>
                        
                        
                    </Card>
                </Col>
                <Col className="p-1">
                <Card className="p-1" style={{backgroundColor: "#002151"}}>
                 <Row>
                  <Col>
                    <Card className="p-4" 
                            style={{backgroundColor:"#00072b"}}>
                      <Row>

                        <Col className="justify-content-center d-flex">
                          
                                  <Card  style={{/*backgroundImage:"linear-gradient(to right,#D4D9DD, #FFFBFF  )",*/
                                  height:"120px",width:"120px",borderRadius:"50%",
                                  /*border:"solid #D1D2D3",*/backgroundColor:'#91d153'}}>
                                      <Row className="p-3">
                                          <Col>
                                          <Card className="text-center"  style={{backgroundColor:"#001642",border:"solid #fff",
                                          height:"90px",width:"90px",borderRadius:"50%",marginLeft:"-2px",marginTop:"-2px"}}>
                                              <CardBody className="justify-content-center d-flex  ">
                                                  
                                                  <Row className=" mt-2 justify-content-center d-flex align-items-center">
                                                    <h4 className="text-white">1000</h4>
                                                  </Row>
                                                  
                                              </CardBody>
                                          </Card>
                                          </Col>
                                      </Row>
                                      <Row className="justify-content-center">
                                        <h6 className="text-white">Offer Provided</h6>
                                      </Row>
                                    
                                  </Card>
                       
                          
                        </Col>
                        <Col className="justify-content-center d-flex" >
                                  <Card  style={{/*backgroundImage:"linear-gradient(to right,#D4D9DD, #FFFBFF  )",*/
                                  height:"120px",width:"120px",borderRadius:"50%",
                                  /*border:"solid #D1D2D3",*/backgroundColor:'#91d153'}}>
                                      <Row className="p-3">
                                          <Col>
                                          <Card className="text-center"  style={{backgroundColor:"#001642",border:"solid #fff",
                                          height:"90px",width:"90px",borderRadius:"50%",marginLeft:"-2px",marginTop:"-2px"}}>
                                              <CardBody className="justify-content-center d-flex  ">
                                                  
                                                  <Row className=" mt-2 justify-content-center d-flex align-items-center">
                                                    <h4 className="text-white">1000</h4>
                                                  </Row>
                                                  
                                              </CardBody>
                                          </Card>
                                          </Col>
                                      </Row>
                                      <Row className="justify-content-center">
                                        <h6 className="text-white">Offer Accepted</h6>
                                      </Row>
                                    
                                  </Card>
                        </Col>
                        <Col className="justify-content-center d-flex" >
                                  <Card  style={{/*backgroundImage:"linear-gradient(to right,#D4D9DD, #FFFBFF  )",*/
                                  height:"120px",width:"120px",borderRadius:"50%",
                                  /*border:"solid #D1D2D3",*/backgroundColor:'#91d153'}}>
                                      <Row className="p-3">
                                          <Col>
                                          <Card className="text-center"  style={{backgroundColor:"#001642",border:"solid #fff",
                                          height:"90px",width:"90px",borderRadius:"50%",marginLeft:"-2px",marginTop:"-2px"}}>
                                              <CardBody className="justify-content-center d-flex  ">
                                                  
                                                  <Row className=" mt-2 justify-content-center d-flex align-items-center">
                                                    <h4 className="text-white">1000</h4>
                                                  </Row>
                                                  
                                              </CardBody>
                                          </Card>
                                          </Col>
                                      </Row>
                                      <Row className="justify-content-center">
                                        <h6 className="text-white">Offer Ratio</h6>
                                      </Row>
                                    
                                  </Card>
                        </Col>
                      </Row>
                      
                    </Card>
                  </Col>
                 </Row>
                </Card>
                </Col>
               
                </Row>
                
            
                

                <Row className="mt-3">
                
                <Col >
                    <Card className="p-1" style={{backgroundColor:'#002151'}}>
                    <Row className=" no-gutters ">
                        <Col className="mb-5 mb-xl-0 p-1" xl="8" style={{}}>
                            <Card className="" style={{boxShadow:"",backgroundColor:"#00072b",height:"400px",
                            /*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
                            border:"0px"
                            /*boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"*/
                            /*boxShadow:"inset 2px 2px 5px #e7e7e7, inset -3px -3px 7px #bbbec3",backgroundColor:"#F8F8F8"*/}}>
                            <CardHeader className="border-0" 
                            style={{ backgroundColor:"#00072b",/*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
                            border:"0px"}}>
                                <Row className="align-items-center">
                                <div className="col">
                                    <h3 className="mb-0 text-white">Current Hiring Pipeline</h3>
                                </div>
                                
                                </Row>
                            
                            
                            </CardHeader>
                            <Table className="align-items-center  table-flush" responsive >
                            <thead >
                            <tr className="" style={{color:"#FFB178"}}>
                                <th scope="col">Company Name</th>
                                <th className=" justify-content-center d-flex" scope="col">Role</th>
                                <th scope="col">Applicant</th>
                                <th scope="col">1st Interview</th>
                                <th scope="col">2nd Interview</th>
                                <th scope="col">3rd Interview</th>
                                <th scope="col">Offers</th>
                            </tr>
                            </thead>
                            {table1.map((item, index)=>(
                            <tbody   >
                            <tr key={index} className="text-white  " >
                                <td className="justify-content-center d-flex" scope="">{item.company}</td>
                                <td >{item.role}</td>
                                <td className="justify-content-center d-flex">{item.applicant}</td>
                                <td >{item.firstInterview}</td>
                                <td>{item.seconsinterview}</td>
                                <td>{item.thirdinterview}</td>
                                <td>{item.offers}</td>
                                
                            
                            </tr>
                        
                        
                        
                            
                            </tbody>
                            ))}
                        </Table>
                            </Card>
                        </Col>
                        <Col xl={4} className="p-1">
                        <Card className="p-4" style={{backgroundColor:"#00072b"}}>
                            <ReactApexChart options={optionsdonut} series={seriesdonut} type="donut" height={380} />
                        </Card>
                        </Col>
                        
                    </Row>
                    </Card>
                </Col>
                
                </Row>

                <Row>
                  <Col lg={4}>
                   <Card style={{backgroundColor:"#00072b"}}>
                   <ReactApexChart options={departmentoptions} series={departmentseries} type="donut" width={380} />

    
                   </Card>
                  </Col>
                </Row>


                
            </div>
        </div>
    );
}
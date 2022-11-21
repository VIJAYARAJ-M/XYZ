import React from "react";
import { useEffect, useState } from "react";
import {Row,Col,Button, Card, CardHeader, Table} from "reactstrap"
import Select from "react-select"
import { ProgressCircular, ProgressLinear } from "ui-neumorphism";
import 'ui-neumorphism/dist/index.css'
import ReactApexChart from "react-apexcharts";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes"

const options = [{
  "id": 1,
  "value": "9ce42304-b732-4791-9731-6f299b6df8c7",
  "label": "GS"
}, {
  "id": 2,
  "value": "90419f06-7d07-45c8-bcec-d675096fe27f",
  "label": "Blue base"
}, {
  "id": 3,
  "value": "a23521da-0a48-4ef6-baa2-d727704f65c2",
  "label": "Shiash"
}, {
  "id": 4,
  "value": "34b2b58a-0123-49e2-b2de-1eef0922139b",
  "label": "Xo"
},]

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
  const select = [
    { value: 'CV Sent', label: 'CV Sent' },
    { value: '1st Interview', label: '1st Interview' },
    { value: '2nd Interview', label: '2nd Interview' },
    { value: '3rd Interview', label: '3rd Interview' },
    
  ]

const data = [{
    "id": 1,
    "value": "9ce42304-b732-4791-9731-6f299b6df8c7",
    "label": "Blue"
  }, {
    "id": 2,
    "value": "90419f06-7d07-45c8-bcec-d675096fe27f",
    "label": "Goldenrod"
  }, {
    "id": 3,
    "value": "a23521da-0a48-4ef6-baa2-d727704f65c2",
    "label": "Teal"
  }, {
    "id": 4,
    "value": "34b2b58a-0123-49e2-b2de-1eef0922139b",
    "label": "Puce"
  }, {
    "id": 5,
    "value": "0fceaec7-fb46-4aef-994b-863a97130168",
    "label": "Khaki"
  }, {
    "id": 6,
    "value": "b68c6b76-bbe0-49a6-8a90-209b8d88d353",
    "label": "Green"
  }, {
    "id": 7,
    "value": "e2829c11-0960-490c-b19b-5c5bb26a18ce",
    "label": "Crimson"
  },  {
    "id": 9,
    "value": "841e6f9f-1e19-4501-8b75-cd153282ed21",
    "label": "Orange"
  }, {
    "id": 10,
    "value": "9346ba4b-8b3e-4c06-b930-cb3d98c58890",
    "label": "Turquoise"
  }, {
    "id": 11,
    "value": "7294d507-d6c5-47bf-8ef3-c291c273b647",
    "label": "Violet"
  }, {
    "id": 12,
    "value": "451d4254-a882-4d53-a4ca-c7cb4707d1a5",
    "label": "Red"
  }, {
    "id": 15,
    "value": "2378fade-f686-4f0d-bf00-4e5213032c9b",
    "label": "Aquamarine"
  },    {
    "id": 20,
    "value": "77ec7a0b-329d-4643-bbc7-0fa12c788ded",
    "label": "Mauv"
  }]

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

  const biggest = [{
    company:"Spiro",
    amount :"$2000",
   
  },
  {
    company:"Zoho",
    amount :"$1500",
   
  },
  {
    company:"Shi#ash",
    amount :"$1000",
   
  },
  {
    company:"ITech",
    amount :"$500",
   
  },]

export default function Consultant(){
    const [getdealdetails, setdealdetails] = useState ([]);

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
            <div>
              
              
              <Row className="mt-4">
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
                                          <div><h4 className="text-white">Consultant</h4></div>
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
              <Row className="mt-2">
                <Col lg={6} className="">
                        <Card className=" p-1  " style={{backgroundColor:"#002151"}} >
                        
                        <Card className="p-2" style={{backgroundColor:"#00072b"}}>
                    <Row className="">
                        
                        <Col xl={3} className="justify-content-center d-flex">
                            
                                    <Card className="text-center justify-content-center align-items-center"
                                    style={{backgroundColor:"#19335A",
                                    /*boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",*/
                                    width:"100px",height:"80px",/*boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"*/
                                    // backgroundImage:'linear-gradient(to right, #44BD95 0%, #C7E08E 100%)',
                                    border:"0px"
                                    }}>
                                        
                                            
                                            <Row className="justify-content-center d-flex align-items-center">
                                            <h5 className="text-white">Deal Value</h5>
                                            </Row>
                                            <Row className="justify-content-center d-flex align-items-center">
                                            <h5 className="text-white">30000</h5>
                                            </Row>
                                        
                                    </Card>
                                    

                                
                            
                        </Col>

                        <Col xl={3} className="justify-content-center d-flex">
                                
                                
                                    
                                    
                                    <Card className="text-center justify-content-center align-items-center"
                                    style={{backgroundColor:"#19335A",
                                    /*boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",*/width:"100px",height:"80px",
                                    /*boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"*/
                                    // backgroundImage:'linear-gradient(to right, #21507B 0%, #88AFDD 100%)',
                                    border:"0px "
                                    }}>
                                        
                                            
                                            <Row className="justify-content-center d-flex align-items-center">
                                            <h5 className="text-white">Deal Closed</h5>
                                            </Row>
                                            <Row className="justify-content-center d-flex align-items-center">
                                            <h5 className="text-white">25</h5>
                                            </Row>
                                        
                                    </Card>
                                    
                                
                            
                        </Col>
                        <Col xl={3} className="justify-content-center d-flex">

                                
                                
                                    
                                
                                    {Object.keys(getdealdetails).map((item, index)=>(
                                    <Card key={index} className="text-center justify-content-center align-items-center"
                                    style={{backgroundColor:"#19335A",
                                    /*boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",*/width:"100px",height:"80px",
                                    /*boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"*/
                                    // backgroundImage:'linear-gradient(to right, #44BD95 0%, #C7E08E 100%)',
                                    border:"0px"}}>
                                        
                                            
                                            <Row className="justify-content-center d-flex align-items-center">
                                            <h5 className="text-white">Deal Count</h5>
                                            </Row>
                                            <Row className="justify-content-center d-flex align-items-center">
                                            <h5 className="text-white">{getdealdetails['dealcount']}</h5>
                                            </Row>
                                        
                                    </Card>
                                    ))}
                                    

                                
                                
                        </Col>

                        <Col xl={3} className="justify-content-center d-flex">
                                
                                
                                    
                                
                                    <Card className="text-center justify-content-center align-items-center"
                                    style={{backgroundColor:"#19335A",
                                    /*boxShadow:"inset 2px 2px 5px #ffffff, inset -3px -3px 7px #bbbec3",*/width:"100px",height:""
                                    ,/*boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"*/
                                    // backgroundImage:'linear-gradient(to right, #21507B 0%, #88AFDD 100%)',
                                    border:"0px"}}>
                                        
                                            
                                            <Row className="justify-content-center d-flex align-items-center">
                                            <h5 className="text-white">Avg days <br/>
                                                to close deal</h5>
                                            </Row>
                                            <Row className="justify-content-center d-flex align-items-center">
                                            <h5 className="text-white">10</h5>
                                            </Row>
                                        
                                    </Card>
                                    

                                
                                
                        </Col>
                        
                        
                        </Row>
                    </Card>

                        <Row className="mt-1">
                        <Col>
                        <Card className="p-4" style={{backgroundColor:"#00072b",
                        /*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)"*/
                            border:"0px"}}>
                            <Row className="justify-content-center d-flex">
                            <div className="col-lg-12">
                                <Row>
                                <div className="col-lg-5 ">
                                <Select className="second-dropdown" options={select} placeholder="Deal stage" />
                                </div>
                                <div className="col-lg-2">

                                </div>
                                
                                
                                <div className="col-lg-5">
                                <Select className=" second-dropdown" options={select} placeholder="Deal stage" />
                                
                                </div>
                                </Row>
                            </div>
                            </Row>
                            <Row className="mt-5">
                            <Col xl="" className="justify-content-center d-flex" >
                            <ProgressCircular elevated value={20} size={100} width={13} color='var(--primary)' label="20%"/>
                            </Col>

                            </Row>

                            <Row className="mt-5">
                            <Col>
                            <ReactApexChart options={options4} series={series4} type="bar" height={280} />
                            </Col>
                            </Row>

                        </Card>
                        </Col>
                        </Row>
                    
                    
                        </Card>
                </Col>
                <Col lg={6} className="">
                <Row className="">
                
                <Col >
                    <Card className="" style={{backgroundColor:'#002151'}}>
                    
                        <Col className="mb-5 mb-xl-0 p-1" xl="12" style={{}}>
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
                                    <h3 className="mb-0 text-white">Table</h3>
                                </div>
                                
                                </Row>
                            
                            
                            </CardHeader>
                            <Table className="align-items-center  table-flush" responsive >
                            <thead className="">
                            <tr className="" style={{color:"#FFB178"}}>
                                <th scope="col">Deal Date</th>
                                <th scope="col">Consultant</th>
                                <th scope="col">Client</th>
                                <th scope="col">Candidate</th>
                                <th scope="col">Commission Amount</th>
                                <th scope="col">Stage</th>
                                <th scope="col"> Deal stage value</th>
                                <th scope="col">Source</th>
                            </tr>
                            </thead>
                            {table.map((item, index)=>(
                            <tbody  >
                            <tr key={index} className="text-white" >
                                <td scope="row">{item.dealdate}</td>
                                <td>{item.consultant}</td>
                                <td>{item.client}</td>
                                <td>{item.candidate}</td>
                                <td>{item.fee}</td>
                                <td>{item.stage}</td>
                                <td>{item.pipevalue}</td>
                                <td>{item.source}</td>
                            
                            </tr>
                        
                        
                        
                            
                            </tbody>
                            ))}
                        </Table>
                            </Card>
                        </Col>
                        
                        
                    
                    </Card>
                </Col>
                
                </Row>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col lg={4} className="">
                <Card className="p-1" style={{backgroundColor:'#002151'}}>
                  <Row>
                  <Col className="mb-5 mb-xl-0 " xl="" style={{}}>
                                <Card className="" style={{boxShadow:"",backgroundColor:"#00072b",height:"auto",
                                /*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
                                border:"0px"
                                /*boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"*/
                                /*boxShadow:"inset 2px 2px 5px #e7e7e7, inset -3px -3px 7px #bbbec3",backgroundColor:"#F8F8F8"*/}}>
                                <CardHeader className="border-0" 
                                style={{ backgroundColor:"#00072b",/*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
                                border:"0px"}}>
                                    <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0 text-white">Biggest deals with month</h3>
                                    </div>
                                    
                                    </Row>
                                
                                
                                </CardHeader>
                                <Table className="align-items-center  table-flush" responsive >
                                <thead className="">
                                <tr className="" style={{color:"#FFB178"}}>
                                    <th scope="col">Company</th>
                                    <th scope="col">Amount</th>
                                    
                                </tr>
                                </thead>
                                {biggest.map((item, index)=>(
                                <tbody  >
                                <tr key={index} className="text-white" >
                                    <td scope="row">{item.company}</td>
                                    <td>{item.amount}</td>
                                  
                                
                                </tr>
                            
                            
                            
                                
                                </tbody>
                                ))}
                            </Table>
                                </Card>
                            </Col>
                  </Row>
                </Card>
                </Col>
              </Row>
            </div>
        </div>
    );

}
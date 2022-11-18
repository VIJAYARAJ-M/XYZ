import React from "react";
import { Col, Row, Card, CardBody, Table,CardHeader } from "reactstrap";

const jobs = [{
    skills:"Java",
    number :"18",
    opening:"23",
   
  },
  {
    skills:"python",
    number :"12",
    opening:"20",
   
  },
  {
    skills:"Reactjs",
    number :"22",
    opening:"40",
   
  },
  {
    skills:"C++",
    number :"10",
    opening:"23",
   
  },]


export default function Jobs(){

    return(
        <div>
            <div>
              
              <h1 className="text-white">Jobs Pages</h1>
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
                                        <h3 className="mb-0 text-white">Jobs By Requireds Skills</h3>
                                    </div>
                                    
                                    </Row>
                                
                                
                                </CardHeader>
                                <Table className="align-items-center  table-flush" responsive >
                                <thead className="">
                                <tr className="" style={{color:"#FFB178"}}>
                                    <th scope="col">Required Skills</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Openings</th>
                                    

                                    
                                </tr>
                                </thead>
                                {jobs.map((item, index)=>(
                                <tbody  >
                                <tr key={index} className="text-white" >
                                    <td scope="row">{item.skills}</td>
                                    <td>{item.number}</td>
                                    <td>{item.opening}</td>
                                  
                                
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
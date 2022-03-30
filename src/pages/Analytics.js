import Contentlist from "../components/contentlist";
import Searchbar from "../components/searchbar";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
    {
      date: 'Monday',
      Chippy: 200,
      Bearbrand: 150,
      PancitCanton: 100,
    },
    {
      date: 'Tuesday',
      Chippy: 230,
      Bearbrand: 150,
      PancitCanton: 120,
    },
    {
      date: 'Wednesday',
      Chippy: 250,
      Bearbrand: 200,
      PancitCanton: 90,
    },
    {
      date: 'Thursday',
      Chippy: 250,
      Bearbrand: 170,
      PancitCanton: 80,
    },
    {
      date: 'Friday',
      Chippy: 200,
      Bearbrand: 260,
      PancitCanton: 70,
    },
    {
      date: 'Saturday',
      Chippy: 270,
      Bearbrand: 250,
      PancitCanton: 50,
    },
    {
      date: 'Sunday',
      Chippy: 300,
      Bearbrand: 200,
      PancitCanton: 60,
    },
  ];




function Analytics(){

    return(
        <div className="row bg-light">
            <div className="col-3 p-5 ">
                <Searchbar />
                <span><br></br></span>
                <Contentlist />
            </div>
            
            <div className="col-9 p-5 ">
            <Nav fill variant="pills" defaultActiveKey="/analytics">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/analytics" active>Top Used Item</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/itemforecasting">Reorder Point Forecast</Nav.Link>
                    </Nav.Item>                  
            </Nav>
            <span><br></br></span>

           

            <div className="row analyticscontainer p-5 bg-white">
            

              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Chippy" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="Bearbrand" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="PancitCanton" stroke="black" />

                </LineChart>
              </ResponsiveContainer>
            </div>





            </div>
        </div>


    );
}
export default Analytics;

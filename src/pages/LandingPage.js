import { Card } from "react-bootstrap";


function LandingPage(){


    return(
        <div className="row p-5 bg-light">
            <div className="col-1"/>

            <div className="col-5" >
            <Card style={{ width: '500px' }}>
                    <Card.Body>
                        <Card.Title>Yesterday's Report</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><small>Thursday, March 24, 2022</small></Card.Subtitle>
                        <Card.Text>
                            <div className='row'>
                                <div className='col-6 p-3'>
                                        <p>Sales</p>
                                        <ul className="list-group list-group-flush listcontainer bg-white guide">
                                            <li class="list-group-item">{1+2+3+1}</li>
                                            <li class="list-group-item">Cras justo odio</li>
                                            <li class="list-group-item">Cras justo odio</li>
                                        </ul>
                                </div>
                                <div className='col-6 p-3'>
                                        <p>Purchase</p>
                                        <ul className="list-group list-group-flush listcontainer bg-white guide">
                                            <li class="list-group-item">{1+2+3+1}</li>
                                            <li class="list-group-item">Cras justo odio</li>
                                            <li class="list-group-item">Cras justo odio</li>
                                        </ul>
                                    </div>
                            </div>

                        </Card.Text>
                    </Card.Body>
                </Card>


            </div>
            <div className="col-5" >
            <Card style={{ width: '500px' }}>
                    <Card.Body>
                        <Card.Title>Today's Report</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><small>Friday, March 25, 2022</small></Card.Subtitle>
                        <Card.Text>
                            <div className='row'>
                                <div className='col-6 p-3'>
                                        <p>Sales</p>
                                        <ul className="list-group list-group-flush listcontainer bg-white guide">
                                            <li class="list-group-item">{1+2+3+1}</li>
                                            <li class="list-group-item">Cras justo odio</li>
                                            <li class="list-group-item">Cras justo odio</li>
                                        </ul>
                                </div>
                                <div className='col-6 p-3'>
                                        <p>Purchase</p>
                                        <ul className="list-group list-group-flush listcontainer bg-white guide">
                                            <li class="list-group-item">{1+2+3+1}</li>
                                            <li class="list-group-item">Cras justo odio</li>
                                            <li class="list-group-item">Cras justo odio</li>
                                        </ul>
                                    </div>
                            </div>

                        </Card.Text>
                    </Card.Body>
                </Card>


            </div>

            <div className="col-1"/>

        </div>
    )
}
export default LandingPage;
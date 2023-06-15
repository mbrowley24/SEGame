import React from "react";
import NavBar from "../components/NavBar";
import DashboardTopRow from "../components/DashboardTopRow";

const Dashboard = props => {

    return(
        <div>
            <NavBar/>
            <h1>Jeopardy Dashboard</h1>
            <div className="container border">
                <DashboardTopRow/>
                <div className={'row'}>
                    <div className={'col'}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
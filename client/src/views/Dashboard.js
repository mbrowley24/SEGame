import React from "react";
import NavBar from "../components/NavBar";
import DashboardTopRow from "../components/DashboardTopRow";
import DashboardBottomRow from "../components/DashboardBottomRow";

const Dashboard = props => {

    return(
        <div>
            <NavBar/>
            <h1>Jeopardy Dashboard</h1>
            <div className="container border rounded">
                <DashboardTopRow/>
                <DashboardBottomRow/>

            </div>
        </div>
    )
}

export default Dashboard;
import React from "react";
import NavBar from "../components/NavBar";
import DashboardTopRow from "../components/DashboardTopRow";
import DashboardBottomRow from "../components/DashboardBottomRow";

const Dashboard = props => {

    return(
        <div className={'background-jeopardy height925px'}>
            <NavBar/>
            <h1 className={'py-3 my-2 text-jeopardy-yellow'}>Jeopardy Dashboard</h1>
            <div className="container border border-dark border-2 rounded">
                <DashboardTopRow/>
                <DashboardBottomRow/>

            </div>
        </div>
    )
}

export default Dashboard;
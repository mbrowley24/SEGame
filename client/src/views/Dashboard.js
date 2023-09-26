import React from "react";
import NavBar from "../components/NavBar";
import DashboardTopRow from "../components/DashboardTopRow";
import DashboardBottomRow from "../components/DashboardBottomRow";
import "../css/generalCss.css"

const Dashboard = props => {

    return(
        <div className={'height101 bg-light'}>
            <NavBar/>
            <h1 className={'py-3 my-2 text-dark '}>Jeopardy Dashboard</h1>
            <div className="container border rounded-3 bg-dark-pink">
                <DashboardTopRow/>
                <DashboardBottomRow/>
            </div>
        </div>
    )
}

export default Dashboard;
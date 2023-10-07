import { useContext } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const Stats = () => {
  const { user } = useContext(AuthContext);


  const data = [
    {
      name: "January",
      projects: 4000,
      problems: 2400,
      amt: 2400
    },
    {
      name: "February",
      projects: 3000,
      problems: 1398,
      amt: 2210
    },
    {
      name: "March",
      projects: 2000,
      problems: 9800,
      amt: 2290
    },
    {
      name: "April",
      projects: 2780,
      problems: 3908,
      amt: 2000
    },
    {
      name: "May",
      projects: 1890,
      problems: 4800,
      amt: 2181
    },
    {
      name: "June",
      projects: 2390,
      problems: 3800,
      amt: 2500
    },
    {
      name: "July",
      projects: 3490,
      problems: 4300,
      amt: 2100
    }
  ];

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-10/12 flex justify-center">
        <div className="stats stats-vertical shadow">

          <div className="stat">
            <div className="stat-title">Problems Solved</div>
            <div className="stat-value">399</div>
            <div className="stat-desc">LeetCode</div>
          </div>

          <div className="stat">
            <div className="stat-title">Projects</div>
            <div className="stat-value">23</div>
            <div className="stat-desc">MERN stack</div>
          </div>

          <div className="stat">
            <div className="stat-title">Companies Applied</div>
            <div className="stat-value">59</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">Jobs</div>
            <div className="stat-value">20</div>
            <div className="stat-desc">Full Time</div>
          </div>

        </div>
      </div>

      <div className="w-10/12 flex justify-center my-10">
        <BarChart
          width={350}
          height={150}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="problems" fill="#8884d8" />
          <Bar dataKey="projects" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Stats;
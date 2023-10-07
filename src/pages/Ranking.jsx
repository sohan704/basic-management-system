import Navbar from "../Components/Navbar";

const Ranking = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Placement</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>System Inc</td>
                <td>Devops Seminar</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Horizon Robotics</td>
                <td>LeetCode Webinar</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Groove Tech</td>
                <td>Linux Workshop</td>
              </tr>
              {/* row 4 */}
              <tr>
                <th>4</th>
                <td>John Doe</td>
                <td>TechSolutions</td>
                <td>Python Bootcamp</td>
              </tr>
              {/* row 5 */}
              <tr>
                <th>5</th>
                <td>Jane Smith</td>
                <td>Smart Systems</td>
                <td>AI & ML Masterclass</td>
              </tr>
              {/* row 6 */}
              <tr>
                <th>6</th>
                <td>Samuel Johnson</td>
                <td>CodeCraft</td>
                <td>Data Science Workshop</td>
              </tr>
              {/* row 7 */}
              <tr>
                <th>7</th>
                <td>Eliza Brown</td>
                <td>Byte Technologies</td>
                <td>Cloud Computing Seminar</td>
              </tr>
              {/* row 8 */}
              <tr>
                <th>8</th>
                <td>Michael Green</td>
                <td>SoftEdge Solutions</td>
                <td>Frontend Development Workshop</td>
              </tr>
              {/* row 9 */}
              <tr>
                <th>9</th>
                <td>Olivia Davis</td>
                <td>WebMasters</td>
                <td>Database Management Webinar</td>
              </tr>
              {/* row 10 */}
              <tr>
                <th>10</th>
                <td>William Wilson</td>
                <td>CodeNinja</td>
                <td>Cybersecurity Workshop</td>
              </tr>
              {/* row 11 */}
              <tr>
                <th>11</th>
                <td>Liam Johnson</td>
                <td>ByteCrafters</td>
                <td>Full Stack Development Seminar</td>
              </tr>
              {/* row 12 */}
              <tr>
                <th>12</th>
                <td>Emma Lee</td>
                <td>TechGenius</td>
                <td>Mobile App Development Workshop</td>
              </tr>
              {/* row 13 */}
              <tr>
                <th>13</th>
                <td>Noah Brown</td>
                <td>DataInnovators</td>
                <td>UX/UI Design Masterclass</td>
              </tr>
              {/* row 14 */}
              <tr>
                <th>14</th>
                <td>Ava Taylor</td>
                <td>CloudBuilders</td>
                <td>Agile Project Management Webinar</td>
              </tr>
              {/* row 15 */}
              <tr>
                <th>15</th>
                <td>Ethan Davis</td>
                <td>CodeCreators</td>
                <td>Blockchain Development Workshop</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Ranking;
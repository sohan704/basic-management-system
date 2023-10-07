import Navbar from "../Components/Navbar";

const Career = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="bg-gray-100 p-8">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Career Opportunities at Tech Education</h1>

            <div className="mb-8">
              <p className="text-lg font-bold mb-2">Current Job Openings:</p>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Software Development Instructor</h2>
                <p className="mb-2">Location: [Specify Location]</p>
                <ul className="list-disc ml-4">
                  <li>Lead engaging workshops and seminars on various programming languages and development tools.</li>
                  <li>Create and update curriculum content to reflect the latest industry trends.</li>
                  <li>Provide mentorship and guidance to students on their coding journey.</li>
                </ul>
              </div>

            </div>

            <div className="mb-8">
              <p className="text-lg font-bold mb-2">Why Join Tech Education:</p>
              <ul className="list-disc ml-4">
                <li>Innovative Environment: Be part of a cutting-edge company that's at the forefront of tech education.</li>
                <li>Global Impact: Help individuals from around the world land dream jobs at major tech companies.</li>
                <li>Continuous Learning: Access to ongoing training and development opportunities to enhance your skills.</li>
                <li>Collaborative Culture: Work with a team of like-minded professionals who are passionate about what they do.</li>
              </ul>
            </div>

            <p>If you're excited about the future of tech education and are ready to make a difference, we want to hear from you! To apply, please send your resume and a cover letter to <a href="mailto:youremail@example.com">youremail@example.com</a>. Please specify the position you are applying for in the subject line.</p>

            <p className="mt-4">Tech Education is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Career;
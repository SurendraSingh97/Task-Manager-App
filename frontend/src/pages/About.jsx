import React from 'react';
import MainLayout from '../layouts/MainLayout';

const About = () => {
  return (
    <MainLayout>
      <div className="about flex justify-center items-center bg-gray-100 py-10">
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Project Description</h2>
          <p className="text-gray-600 leading-relaxed">
            The Task Manager is a web application designed to help users manage their tasks efficiently. Users can create, edit, and delete tasks, as well as mark them as completed. The application provides a user-friendly interface for task management, allowing users to stay organized and productive.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;
//   return (
//     <MainLayout>
//       <div className="about d-flex justify-content-center align-items-center">
//         <div className="container">
//           <div className="d-flex">
//             <h1>About Us</h1>
//           </div>
//           <h1>Project Description</h1>
//           <p>
//             The Task Manager is a web application designed to help users manage their tasks efficiently. Users can create, edit, and delete tasks, as well as mark them as completed. The application provides a user-friendly interface for task management, allowing users to stay organized and productive.
//           </p>
//         </div>
//       </div>
//     </MainLayout>
//   );
// }

// export default About;

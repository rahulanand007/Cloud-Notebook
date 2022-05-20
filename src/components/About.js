import React from 'react'

const About = () => {
  return (
    <div className='container my-4'>
      <div className="accordion column justify-content-center" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Cloud-Notebook
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
          It is a simple react website developed to save your day to day tasks to simpyfy management of work. It supports addition, deletion and updating of notes.<br/><strong>These notes are personalised for every user and cannot be accessed without proper authentication(login required)</strong>. Sign up feature avalaible to add new users.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Technologies Used
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>React -</strong> The client side of the application is completely based on React. It is a free and open-source front-end JavaScript library for building user interfaces based on UI components.<br/>
        <strong>Bootstrap -</strong> To make the application more responsive, bootstrap is used in components. It is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.<br/>
        <strong>MongoDB -</strong> The database used for storing notes and user details is MongoDB. It is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.<br/>
        <strong>Express -</strong> The server-side of the application is completely based on Express. Simplicity, minimalism, flexibility and scalability are some of it's features. <br/>
        <strong>Mongoose -</strong> Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Express web application framework.<br/>
        <strong>Thunder Client -</strong> Thunder Client is a lightweight Rest API Client Extension for Visual Studio Code for Testing APIs.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        About Developer
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Rahul Anand -</strong> Extremely enthusiastic and passionate engineer with positive attitude towards learning and life. Possesses strong 
knowledge of web designing and modular code building.<br/>
        <strong>Phone no -</strong> +91-9821032071 <br/>
        <strong>Email -</strong> rahul03061998@gmail.com
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
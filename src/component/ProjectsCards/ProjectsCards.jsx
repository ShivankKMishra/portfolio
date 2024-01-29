import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsCards(props) {
  return (
    <div className='flex flex-col items-center border border-black w-45 h-25 rounded-2xl m-10 p'>
      <img className="h-30 p-1 m-2  rounded-2xl max-w-40 " src={props.image} alt="Project Image" />
      <h1 className='text-2xl p-1'>{props.projectName}</h1>

      <div className='flex items-center justify-center my-7 font-bold '>
        <button><Link to={props.githubLink}><img className='h-12' src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub Logo" /></Link></button>
        <button><Link to={props.Linking}><img className='h-12' src="https://icon-library.com/images/icon-code/icon-code-0.jpg" alt="Code Icon" /></Link></button>
      </div>
    </div>
  );
}

export default ProjectsCards;

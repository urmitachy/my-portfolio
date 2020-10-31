import React from 'react';
import image1 from '../../../images/volunteer-network-project.web.app_.png';
import image2 from '../../../images/travelGuru.png';
import image3 from '../../../images/volunteer-network-project.web.app_.png';
// import image4 from '../../../images/hotGadjet.png';
// import image5 from '../../../images/socialBuddy.png';
// import image6 from '../../../images/doctorPortal.png';
import './Projects.css';
const projectData = [
    {
        title: 'creative-agency',
        description: 'A fullstack responsive website',
        image: image1,
        github: 'https://github.com/urmitachy/creative-agency-client.git',
        livelink: 'https://creative-agency-committee.web.app/',
    },
    {
        title: 'volunter-network',
        description: 'A fullstack responsive website',
        image: image3,
        github: 'https://github.com/urmitachy/volunteer-network.git',
        livelink: 'https://volunteer-network-moon.web.app/',
    },
    {
        title: 'travel-guru',
        description: 'A fullstack responsive website',
        image: image2,
        github: 'https://github.com/urmitachy/travelling-site',
        livelink: 'https://travel-guru-e504c.web.app/',
    },
   

];

const Projects = () => {
    return (
        <div id="projects" className="container my-5">
            <h1 className="text-center font-weight-bold mb-5">My <span className="text-brand">Projects</span></h1>
            <div className="row mt-5 my-5">
                {
                    projectData.map(pd =>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 border-1 my-5">
                        <div className="card-body border-2 background">
                            <div className="p-2 mb-2">
                                <img style={{ height: '120%', width: '100%', borderRadius: '15px' }} src={pd.image} alt="" />
                            </div>
                            <div className="card-body p-4">
                                <h5 className="font-weight-bold">{pd.title}</h5>
                                <p className='mt-3'>{pd.description}</p>
                                <a href={pd.github}><button type="button" class="btn btn-secondary btn-block mb-1">GitHub Link</button></a>
                                <a href={pd.livelink}><button type="button" class="btn btn-primary btn-block">Live site</button></a>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>


    );
};

export default Projects;
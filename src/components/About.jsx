import profilepic from "../assets/pic2.jpg"

export default function About() {
    return(
      <div className="consd ">
        <div className="about-section">
            <div className="profile-img"> 
            <img src={profilepic} alt="profile" />
            </div>
            <div className="descrip-card"> 
             <h1 className="title">About me</h1>
             <div className="summary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe aliquam maiores temporibus quam eveniet laudantium, consequatur pariatur iusto, eligendi dolores voluptatibus odio voluptas. Tenetur reiciendis harum necessitatibus magni eius! Voluptatibus.</div>
              <div>
              <div className="icons"> 
            <div> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></div>
            <div>
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
          
          </div>
            </div> 
              </div>
             </div>
             
             </div>
             </div>
    )
}
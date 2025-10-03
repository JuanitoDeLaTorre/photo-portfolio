import ProfilePic from '../photos/profile.jpg'
import '../index.css'

export default function About() {
  return (
    <div className = "aboutContainer">
      <h1>About Me</h1>
      <img
        src={ProfilePic}
        alt="Portrait of John Thomas"
        style={{
          float: 'left',
          height: '40vh',
          marginRight: '2.5rem',
          marginBottom: '1rem',
          borderRadius: '8px' // optional for rounded corners
        }}
      />
      <p style = {{lineHeight: "2.5"}}>
        John Thomas (b. 1996) is a <strong>Boston based photographer</strong> who gained an early
        love for travel and the outdoors through his frequent and international
        moves in early childhood. He uses digital photography to showcase detailed
        macro scenes, sweeping and awe-inspiring landscapes, and everything in
        between. Currently, he is working to showcase and explore the intersection
        between the natural world and the ever-increasing influence and presence of
        technology. Thomas earned two advanced degrees in environmental science
        studying aerial imaging from Brigham Young University and the University of
        Rhode Island. During this time, Thomas entered numerous photo competitions,
        most notably, the campus-wide 2019 Kennedy Center Study Abroad photo
        contest. He was featured in magazines like Stowaway and multiple galleries
        across campus. He is currently studying at the Massachusetts College of Art
        and Design.
      </p>
    </div>
  );
}
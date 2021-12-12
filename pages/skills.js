
export default function Skills(){
    return (
        <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">My skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My skills & experiences.</div>
              <p>
                I am currently learning from curriculum of AltCampus.
              </p>
              <a href="https://altcampus.school/" target="_blank">AltCampus</a>
            </div>
            <div className="column right">
              {["HTML, CSS, JavaScript","MongoDB, Express, React, Node", "Nextjs, Tailwind"].map(el=>{
                return <div className="bars" key={el}>
                <div className="info">
                  <span>{el}</span>
                </div>
              </div>
              })}
             
            </div>
          </div>
        </div>
      </section>
    )
}
import PCModel from "./PCModel";
import { info } from "../../../utils/info";
import GridBackground from "@/components/ui/GridBackground";

const About = ({ theme }) => {
  return (
    <>
      <style jsx>{`
        /* Scroll text */
        @keyframes scrollTextInfinite {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

      

        .scrolling-text {
          animation: scrollTextInfinite 23.5s linear infinite;
        }

        

        /* Hover: pause cả text và line */
        .group:hover .scrolling-text{
          animation-play-state: paused;
        }
      `}</style>

      <section  id="about" className={`relative py-10 min-h-screen ${   theme === "dark" ? '60a5fa' : '#2563eb' }`} >
         <GridBackground theme={theme} colorScheme="pink" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                theme === "dark"
                  ? "text-white drop-shadow-lg"
                  : "text-gray-900 drop-shadow-lg"
              }`}
            >
              About Me
            </h2>
            <div
              className={`w-10 h-1 mx-auto rounded-full ${
                theme === "dark" ? "bg-blue-400" : "bg-blue-600"
              }`}
            />
          </div>

          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Scrolling Card */}
            <div className={`relative max-w-xl lg:max-w-none mx-auto h-96 sm:h-120 lg:h-160 rounded-lg shadow-2xl border overflow-hidden group 
              ${  theme === 'dark'   ? 'bg-gray-900/60 border-blue-500/30 hover:border-blue-400/50'   : 'bg-white/80 border-blue-300/50 hover:border-blue-500/70' }`}>
              {/* Top Scroll Bar */}
              <div className={`absolute top-0 left-0 right-0 h-6 border-b flex items-center justify-center z-10 ${
                theme === 'dark' ? 'bg-blue-900 border-blue-700/50' : 'bg-blue-100 border-blue-300/50' }`}>
                <div className={`w-24 h-2 rounded-full shadow-inner border ${
                  theme === 'dark' ? 'bg-gradient-to-r from-blue-400 to-blue-300 border-blue-200/30' : 'bg-gradient-to-r from-blue-500 to-blue-400 border-blue-300/50'}`}>
                </div>
                
              </div>

              {/* Bottom Scroll Bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-6 border-t flex items-center justify-center z-10 ${
                theme === 'dark' ? 'bg-blue-900 border-blue-700/50' : 'bg-blue-100 border-blue-300/50' }`}>
                <div className={`w-24 h-2 rounded-full shadow-inner border ${
                  theme === 'dark' ? 'bg-gradient-to-r from-blue-400 to-blue-300 border-blue-200/30' : 'bg-gradient-to-r from-blue-500 to-blue-400 border-blue-300/50'}`}>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="relative pt-8 pb-8 overflow-hidden lined-background">
                <div className="scrolling-text">
                  
                   <ContentBlock theme={theme} />
                   <br />
                   <ContentBlock theme={theme} />
                </div>
              </div>
            </div>

            {/* 3D Model - Responsive sizes */}
            <div className="relative flex items-center justify-center mt-8 lg:mt-0 h-96 sm:h-120 md:h-144 lg:h-full w-full">
              <PCModel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* Tách phần nội dung ra để reuse */
function ContentBlock({ theme }) {
  return (
    <>
      <div className="px-8 py-4 text-left relative z-10">
        <h1 className={`text-xl mb-1 text-center ${ theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
         <strong className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Abhay Kumar</strong>
        </h1>
        <h3 className={`text-base mb-1 text-center ${ theme === 'dark' ? 'text-blue-100' : 'text-blue-100' }`}>
          📩abhaysingh19oct | 📞(+91)7835998969
        </h3>
        <h3 className={`text-base mb-2 text-center ${ theme === 'dark' ? 'text-blue-100' : 'text-blue-100' }`}>
          <a href={info.social.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors text-center ">
              🔗 @{info.githubUsername} |
            </a>
          <a href={info.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors text-center ">
              🔗 @abhayslinkk
            </a>
        </h3>
        
        <div className={`space-y-4 text-sm mb-4 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {/* Skills */}
          <div className="bg-gradient-to-r from-blue-50/10 to-cyan-50/10 rounded-lg p-3 border border-blue-200/20">
            <p className="mb-1">
              ✨ <strong className="text-purple-500">SKILLS:</strong>
            </p>
            <p className="mb-1">
               <strong className="text-blue-500">PROGRAMMING LANGUAGES:</strong> C| C++| Python| JavaScript
            </p>
            <p className="mb-1">
               <strong className="text-cyan-500">LIBRARIES & FRAMEWORKS:</strong> React.js  Node.js| Express.js
            </p>
            <p className="mb-1">
               <strong className="text-blue-500">BACKEND & DATABASED:</strong> MongoDB| RESTful APIs
            </p>
            <p className="mb-1">
               <strong className="text-cyan-500">TOOLS & PLATFORMS:</strong> Git| GitHub | Postman
            </p>
            <p className="mb-1">
               <strong className="text-blue-500">CORE CONCEPTS:</strong> DSA| OOP| System Design
            </p>
            <p className="mb-1">
               <strong className="text-cyan-500">MISCELLANEOUS:</strong> Problem Solving| Debugging
            </p>
          </div>

          {/* Education */}
          <div className="bg-gradient-to-r from-purple-50/10 to-blue-50/10 rounded-lg p-3 border border-purple-200/20">
            <p className="mb-1">
              🎓 <strong className="text-purple-500">EDUCATION:</strong>
            </p>
            <p>
              <strong className="text-blue-500">TECHNO MAIN SALT LAKE (TMSL) </strong> ` (Aug 2024 - Jun 2028)
            </p>
            <p>
              <span className="text-purple-50">Btech, Computer Science</span>
            </p>
            <p>
              <span className="text-purple-50">GPA: 8.00/10</span>
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="bg-gradient-to-r from-green-50/10 to-blue-50/10 rounded-lg p-3 border border-green-200/20">
            <p className="mb-2">
              🎯 <strong className="text-purple-500">EXPERIENCE:</strong>
            </p>
            <p>
              <strong className="text-blue-500">SOFTWARE ENGINEER INTERN | CAL.COM</strong> ` (jun 26 - jul 26)
            </p>
            <p className="mb-1">
              <span className="text-purple-50 underline">React.js| Node.js| Express.js| MongoDB</span>
            </p>
            <p className="mb-2">
              <span className="text-purple-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </p>
            <p>
              <strong className="text-cyan-500">AI ENGINEER INTERN | CAL.COM</strong> ` (jun 26 - jul 26)
            </p>
            <p className="mb-1">
              <span className="text-purple-50 underline">Pyton| NumPy| Pandas| Scikit-learn</span>
            </p>
            <p>
              <span className="text-purple-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </p>
          </div>

          {/* PROJECTS */}
          <div className="bg-gradient-to-r from-green-50/10 to-blue-50/10 rounded-lg p-3 border border-green-200/20">
            <p className="mb-2">
              👨🏻‍💻 <strong className="text-purple-500">PROJECTS:</strong>
            </p>
            <p>
              <strong className="text-blue-500">PROJECT1 | CAL.COM</strong>
            </p>
            <p className="mb-1">
              <span className="text-purple-50 underline">React.js| Node.js| Express.js| MongoDB</span>
            </p>
            <p className="mb-2">
              <span className="text-purple-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </p>
            <p>
              <strong className="text-cyan-500">PROJECT2 | CAL.COM</strong>
            </p>
            <p className="mb-1">
              <span className="text-purple-50 underline">Pyton| NumPy| Pandas| Scikit-learn</span>
            </p>
            <p>
              <span className="text-purple-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </p>
          </div>

          {/* HONORS & AWARDS */}
          <div className="bg-gradient-to-r from-purple-50/10 to-blue-50/10 rounded-lg p-3 border border-purple-200/20">
            <p className="mb-1">
              🎖️ <strong className="text-purple-500">HONORS & AWARDS:</strong>
            </p>
            <p>
              <strong className="text-blue-500">SCHOLARSHIP </strong> (Award)
            </p>
            <p className="mb-2">
              <span className="text-purple-50">Upcomming | Upcomming | Upcomming</span>
            </p>
            <p>
              <strong className="text-cyan-500">SCHOLARSHIP </strong> (Award)
            </p>
            <p>
              <span className="text-purple-50">Upcomming | Upcomming | Upcomming</span>
            </p>
          </div>

          {/* COURSEWORK */}
          <div className="bg-gradient-to-r from-purple-50/10 to-blue-50/10 rounded-lg p-3 border border-purple-200/20">
            <p className="mb-1">
              💻 <strong className="text-purple-500">COURSEWORK:</strong>
            </p>
            <p>
              <strong className="text-purple-50">BACKEND DEVELOPMENT</strong> - (AI-driven user-centric products)
            </p>
            <p>
              <strong className="text-blue-100">DATA STRUCTURE & ALGORITHM </strong> 
            </p>
            <p>
              <strong className="text-blue-100">MACHINE-LEARNING |DEEP-LEARNING |GEN-AI </strong> 
            </p>
          </div>

          {/* OTHERS */}
          <div className="bg-gradient-to-r from-blue-50/10 to-cyan-50/10 rounded-lg p-3 border border-blue-200/20">
            <p className="mb-1">
              🚀 <strong className="text-purple-500">OTHERS:</strong>
            </p>
            <p className="mb-2">
               <strong className="text-blue-500">TECH PASSION:</strong> Focused on building scalable AI-driven web apps & Deeply passionate about learning new technologies and continually enhancing my skills.
            </p>
            <p className="mb-1">
               <strong className="text-cyan-500">ALWAYS SEEKING:</strong> looking for opportunities to collaborate with other professionals and organizations that share my vision and nurture my passion for programming and values of creating impactful and user-centric products.
            </p>
            
          </div>

        </div>
      </div>

    </>
  );
};

export default About;
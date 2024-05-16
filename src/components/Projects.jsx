/* eslint-disable react/no-unescaped-entities */
export default function Projects() {
    return (
        <section id="projects">
            <div>
                <div className="python-projects">
                    <h3>Python - Projects</h3>
                    <div className="project">      
                        <h4>
                        <a href="/blog" target="_blank">Haven Bloggers</a> 
                        </h4>
                        <p>
                        Flask, SQLAlchemy, Authentication, flask bcrypt, Flask Mail.
                        </p>
                        <p>
                        Live: <a href="/blog" target="_blank">Haven Bloggers</a>
                        </p>
                        <p>
                        Github: <a href="https://github.com/NomanJafri/Flask_Blog" target="_blank"> Repo</a>
                        </p> 
                    </div>

                    <div className="project">
                        <h4>
                            <a href="/" target="_blank">Profile - NomanJafri.com</a>
                        </h4>
                        <p>
                            HTML5, CSS3, JavaScript, Flask to serve files.
                        </p>
                        <p>
                            Live: <a href="/" target="_blank">NomanJafri.com</a>
                        </p>
                    </div>
                </div>

                <div className="javascript-projects">
                    <h3>JavaScript - Projects</h3>

                    <div className="project">
                        <h4>
                        <a href="/drum_kit" target="_blank">Drum Kit</a> 
                        </h4>
                        <p>
                        Plain old JS with some music (Happy Drumming)

                        </p>
                        <p>
                        Live: <a href="/drum_kit" target="_blank"> Drum Kit </a>
                        </p>     
                    </div>

                    <div className="project">
                        <h4>          
                            <a href="/dicee" target="_blank">Dicee</a> 
                        </h4>
                        <p>
                            keep refreshing winner changes on each refresh, JS

                        </p>
                        <p>
                            Live: <a href="/dicee" target="_blank">Dicee</a>
                        </p>
                    </div>

                    <div className="project">
                        <h4>
                            <a href="/dynamic_typing" target="_blank">Dynamic Typing</a>  
                        </h4>
                        <p>
                            React app, making use of hooks and controlled fields.  
                        </p>
                        <p>
                            Live: <a href="/dynamic_typing" target="_blank"> Dynamic Typing </a> 
                        </p>
                    </div>

                    <div className="project">
                        <h4>
                            <a href="/todo_list" target="_blank">ToDo List</a> 
                            
                        </h4>
                        <p>
                            React app, managing complexity  
                        </p>
                        <p>
                            Live: <a href="/todo_list" target="_blank">ToDo List</a>
                        </p>
                    </div>

                    <div className="project">
                        <h4>
                            <a href="/keeper_app" target="_blank">Keeper App</a>   
                        </h4>
                        <p>
                            React app, making sticky notes on your screen.  
                        </p>
                        <p>
                            Live: <a href="/keeper_app" target="_blank">Keeper App</a>  
                        </p>
                    </div>

                    <div className="project">
                        <h4>
                            <a href="https://github.com/NomanJafri/focustime" target="_blank">Focus Time</a>   
                        </h4>
                        <p>
                            React Native app, based on Pomodoro technique.  
                        </p>
                        <p>
                            Github: <a href="https://github.com/NomanJafri/focustime" target="_blank">Repo</a>
                        </p>
                    </div>

                    <div className="project">
                        <h4>
                            <a href="https://github.com/NomanJafri/MealsToGo" target="_blank">Meals To Go</a>
                        </h4>
                        <p>
                            React Native app, finding restaurants near your location and <br /> checkout it's assumed menu!
                        </p>
                        <p>
                            Github: <a href="https://github.com/NomanJafri/MealsToGo" target="_blank">Rep</a>
                        </p>
                    </div>    
                </div>

                <div className="html-css-projects">
                    <h3>HTML5 & CSS3</h3>
                    <div className="project">
                        <h4>
                            <a href="/tindog" target="_blank">Tindo</a>           
                        </h4>
                        <p>
                            Plain HTML5 and CSS3  
                        </p>
                        <p>
                            Live: <a href="/tindog" target="_blank"> Tindog</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
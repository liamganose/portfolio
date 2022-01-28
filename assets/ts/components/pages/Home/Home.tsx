import React from "react";
import Typed from "react-typed";

const Home = () => {

    const topics: Array<string> = [
        "Python",
        "SQL",
        "JavaScript",
        "TypeScript",
        "Flask",
        "Docker",
        "C++",
        "Machine Learning",
        "PySpark",
        "Big Data",
        "APIs",
        "cooking",
        "coffee",
        "music",
        "gigs",
        "automation",
        "Bash",
        "React",
        "Git",
        "AWS",
        "Elixir"
    ];

    return (
        <>
            <h1 className="headline mt-26 text-3xl md:text-5xl lg:text-6xl lg:leading-loose">
                Hey, I&apos;m Liam Ganose 
		    </h1>
		    <p className="mb-8 text-lg">
                I&apos;m a software engineer with 3+ years experience specialising 
                in backend development, infrastructure automation and data science.
                I'm massively passionate about all areas of tech and am constantly 
                learning new technologies and applying them to things I find interesting.
                I'm also really into sports, going to gigs and cooking.
                You can talk to me about{' '}
			    <Typed
    				loop
	    			typeSpeed={80}
		    		backSpeed={20}
			    	strings={topics.sort(() => Math.random() - 0.5)}
				    smartBackspace
    				backDelay={1000}
	    			loopCount={0}
		    		showCursor
			    	cursorChar="|"
			    />
                .
		    </p>
		    <p>
			    P.S. this website was built using Elixir (Phoenix), TypeScript and ReactJS. It is open-source and available on{' '}
			    <a
				    href="https://github.com/liamganose/portfolio"
                    title="Link to Github repository"
	    			target="_blank"
		    	    className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0"
			    >
				    Github
			    </a>
			    .
		    </p>
        </>
    );
};

export { Home };

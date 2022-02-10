import React from "react";

interface projectProps {
    title: string;
    url: string;
    technologies: string[];
    description: string;
}

const Projects: React.FC = () => {
    const projects: projectProps[] = [
        {
            "title": "Portfolio",
            "url": "https://github.com/liamganose/portfolio",
            "technologies": ["Elixir (Phoenix)", "TypeScript", "React", "Docker"],
            "description": "The code for this website. This was made to serve as a landing \
                            page for my work experience / skills, but also as an opportunity \
                            to learn Elixir and TypeScript."
        },
        {
            "title": "Wordle Solver",
            "url": "https://github.com/liamganose/wordle_solver",
            "technologies": ["Python", "Selenium", "Information Theory"],
            "description": "Selenium bot to automatically solve the daily wordle challenge. \
                            When run, this will open up the Wordle webpage and make guesses till \
                            it gets the correct answer. This package is bundled as a cli command."
        },
        {
            "title": "Hash Table",
            "url": "https://github.com/liamganose/hashtable",
            "technologies": ["C++"],
            "description": "Basic hash table implementation in C++. This is all templated to \
                            allow for any key/value types."
        }
    ]

    return (
        <>
            <h1 className="headline mt-26 mb-2 text-3xl md:text-5xl lg:text-6xl lg:leading-loose">
                Github Repos
            </h1>
            <p className="mb-8 text-lg">
                Aside from work, I like to work on smaller projects in my own time.
                This is usually due to finding something interesting, and wanting to try it out for myself.
                Many of my Github repos are private but some are public and these can be seen below.
            </p>
            {projects.map(({ title, url, technologies, description }: projectProps, i: number) => (
                <a href={url} target="_blank" key={i}>
                    <div className="md:w-10/12 px-8 py-6 rounded-3xl glass-light dark:glass-dark mb-6 drop-shadow-lg hover:drop-shadow-2xl transition-all">
                        <h2 className="headline-reversed text-xl md:text-2xl font-bold mb-2">{title}</h2>
                        <p className="text-sm mb-4">
				    	    <strong>Tech used: </strong>{technologies.join(', ')}
				        </p>
                        <p>{description}</p>
                    </div>
                </a>
            ))}
        </>
    );
};

export { Projects };

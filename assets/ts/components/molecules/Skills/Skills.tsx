import React from "react";

interface SkillsProps {
    Programming: string[];
    Web Dev: string[];
    DevOps: string[];
    Analytics: string[];
}

const Skills: React.FC = () => {
    const skills: SkillsProps = {
        "Programming": ["Python", "C++", "Elixir", "Bash"],
        "Web Dev": ["Flask", "Phoenix", "JavaScript", "React", "TypeScript", "REST", "Redux"],
        "DevOps": ["AWS", "Docker", "Kubernetes", "Jenkins", "Airflow", "Azure"],
        "Analytics": ["SQL", "Excel/VBA", "R", "PySpark", "Pandas", "SKLearn", "MLlib"]
    }

    return (
         <div className="md:w-10/12 px-8 py-6 rounded-3xl glass-light dark:glass-dark mb-6 drop-shadow-lg hover:drop-shadow-2xl transition-all">
            <div className="flex gap-4 items-start items-center">
                <ul className="w-1/10 hidden md:block">
                    {Object.keys(skills).map((topic: string, index: number) => (
                        <li className="mt-1 text-right" key={index}>
                            <strong>{topic}</strong>
                        </li>        
                    ))}
                </ul>
                <ul className="w-9/10 hidden md:block">
                    {Object.keys(skills).map((topic: string, index: number) => (
                        <li className="mt-1" key={index}>
                            {skills[topic].join(' \u00B7 ')}
                        </li>
                    ))}
			    </ul>
            </div>
            <ul className="md:hidden disc-none">
                {Object.keys(skills).map((topic: string, index: number) => (
                    <li className="mt-1" key={index}>
                        <strong>{topic}</strong>: {skills[topic].join(', ')}
                    </li>        
                ))}
            </ul>
        </div>
    );
};

export { Skills };

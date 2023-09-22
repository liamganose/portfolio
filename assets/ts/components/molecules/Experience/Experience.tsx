import React from "react";
import classNames from 'classnames';

import { InfoBoard, InfoBoardProps } from "Atoms/InfoBoard";

const Experience: React.FC = () => {

    const experience: InfoBoardProps[] = [
        {
            "company": "The Voleon Group",
            "title": "Site Reliability Engineer",
            "date": "Jul. 2021 - present",
            "icon": "voleon",
            "technologies": ["Python", "Bash", "Kubernetes", "Docker", "Airflow", "Git", "SQL", "Pandas", "Linux", "Jenkins"],
            "summary": []
        },
        {
            "company": "PwC",
            "title": "Senior Technology Associate",
            "date": "Sep. 2018 - Jul. 2021",
            "icon": "pwc",
            "technologies": ["Python", "Flask", "Docker", "Azure", "Git", "JavaScript", "REST", "React", "SQL", "PySpark"],
            "summary": []
        },
        {
            "company": "Add People",
            "title": "Account Manager",
            "icon": "addpeople",
            "date": "Jul. 2017 - Oct. 2017",
            "technologies": ["Google AdWords", "JavaScript", "VBA"],
            "summary": []
        },
    ];

    return (
        <>
            {experience.map(
                (content, index: number) => (
                    <div
						className={classNames(
							'flex transition-all transform md:hover:scale-[1.01]',
							{
								'justify-end': index % 2 !== 0,
							}
						)}
						key={index}
					>
                        <InfoBoard content={content} />
					</div>
                )
            )}
        </>
    );
};

export { Experience };

import React from "react";
import classNames from 'classnames';

import { InfoBoard, InfoBoardProps } from "Atoms/InfoBoard";

const Education: React.FC = () => {

    const education: InfoBoardProps[] = [
        {
            "company": "University of Lancaster",
            "icon": "lancaster",
            "title": "B.S. in Computer Science and Mathematics",
            "date": "Sep. 2015 - Jul. 2018",
            "modules": {
                "Comp-Sci": ["Software Development", "Databases", "Artificial Intelligence", "Languages and Compilation", "Security and Risk"],
                "Maths": ["Linear Algebra", "Probability Theory", "Stochastic Processes", "Bayesian Inference", "Financial Mathematics"]
            }
        },
        {
            "company": "Coursera",
            "icon": "coursera",
            "title": "Machine Learning",
            "date": "Sep. 2019",
            "modules": {
                "Course": ["Linear Regression", "Logistic Regression", "Artificial Neural Network", "Unsupervised Learning"]
            }
        }
    ];

    return (
        <>
            {education.map(
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

export { Education };

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
            "technologies": ["Python", "Bash", "Docker", "Airflow", "Git", "SQL", "Pandas", "Linux", "Jenkins"],
            "summary": [
		"Development, improvement and maintenance of a trading system (Python) being orchestrated by Airflow DAGs.",
		"Improved fixed income data mapping code which increased simulated PnL by over 2\%.",
		"Mentored and trained over 10 new employees on in-house/open-source tooling.",
		"Built an automated SLA system which paged on-call staff if there were delays which could affect trading.",
		"Involved in first line support -- debugging production issues which would be critical to the trading day if not remediated.",
		"Worked on a production critical system where developing efficient, scalable and maintainable code is extremely important.",
		"Worked with DevOps tooling; such as Kubernetes, Jenkins (CI/CD) and Prometheus."
            ]
        },
        {
            "company": "PwC",
            "title": "Senior Technology Associate",
            "date": "Sep. 2018 - Jul. 2021",
            "icon": "pwc",
            "summary": [
                "Started on the graduate scheme as a technology associate and was promoted twice to become a senior associate.",
                "Involved in a buddy scheme where I had to welcome a new graduate into the firm and mentor them throughout their projects.",
                "Worked on many projects across different technical areas; such as full-stack web development, machine learning, process automation and big data. All of this work was in the finance industry.",
                "Some examples are included below."
            ]
        },
        {
            "company": "PwC",
            "title": "Software Engineer",
            "project": "Regulatory Reporting Tool - Tier 1 Investment Bank",
            "icon": "pwc",
            "technologies": ["Python", "Flask", "Docker", "Azure", "Git", "JavaScript"],
            "summary": [
                "Designed and built a highly automated cloud-based tool which ran a series of regulatory reporting tests.",
                "Presented results in an interactive D3.js dashboard.",
                "This reduced the auditing process from 3+ people working for multiple days down to ~30 seconds."
            ]
        },
        {
            "company": "PwC",
            "title": "Software Engineer",
            "project": "Audit Automation Tool - Internal",
            "icon": "pwc",
            "technologies": ["Python", "Flask", "Docker", "Azure", "Git", "JavaScript", "React", "REST", "SQL"],
            "summary": [
                "Setup CI/CD infrastructure on Azure to automate the testing of machine learning models.",
                "Built a web application using a Flask back-end and a React front-end.",
                "The back-end was comprised of REST APIs to handle storing results into a PostgreSQL database.",
                "Designed and built a React dashboard to show the results, including comparisons to previous runs.",
                "This massively reduced manual testing time and increased the overall quality of the models."
            ]
        },
        {
            "company": "PwC",
            "title": "Data Scientist/Analyst",
            "project": "Anti-Money Laundering Investigation - Retail Bank",
            "icon": "pwc",
            "technologies": ["Python", "PySpark", "Hadoop", "SQL", "MLlib", "JavaScript"],
            "summary": [
                "Helped build a screening algorithm using PySpark to identify suspicious payments.",
                "Trained and deployed a machine learning model to identify True/False positives from the results of the screening algorithm.",
                "This reduced the manual review time of these results from months to minutes.",
                "Created ad-hoc scripts to perform repeatable analysis on new datasets.",
                "Wrote reports on the code which were presented to legal counsel and then used in legal proceedings."
            ]
        },
        {
            "company": "PwC",
            "title": "Data Scientist",
            "project": "Machine Learning for Data Quality - Tier 1 Investment Bank",
            "icon": "pwc",
            "technologies": ["Python", "PySpark", "Hadoop", "SQL", "MLlib", "SKLearn"],
            "summary": [
                "Implemented machine learning models to detect data quality issues on a range of investment data.",
                "Used PySpark and MLlib when the datasets were too large to be run in memory.",
                "Identified unknown anomalous transactional data and automatically generated new data quality rules.",
                "This helped minimise the potential regulatory and financial impact of erroneous data."
            ]
        },
        {
            "company": "Add People",
            "title": "Account Manager",
            "icon": "addpeople",
            "date": "Jul. 2017 - Oct. 2017",
            "technologies": ["Google AdWords", "JavaScript", "VBA"],
            "summary": [
                "Automated the current manual process of building Google Adwords campaigns using VBA.",
                "This reduced campaign built time from multiple days to just minutes.",
                "Taught myself Google Script (JavaScript) to build scripts for the team to automatically adjust ad pricing."
            ]
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

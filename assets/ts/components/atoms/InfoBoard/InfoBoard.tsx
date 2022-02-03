import React from "react";

export interface InfoBoardProps {
    company: string;
    title: string;
    icon: string;
    summary?: string[];
    technologies?: string[];
    date?: string;
    project?: string;
    modules?: {[key: string]: string[]};
}

const InfoBoard: React.FC = ({ content }: InfoBoardProps) => {
    return (
        <div className="md:w-10/12 px-8 py-6 rounded-3xl glass-light dark:glass-dark mb-6 drop-shadow-lg hover:drop-shadow-2xl transition-all">
            <div className="flex gap-4 items-start md:items-center">
                <img src={`/images/${content.icon}.png`} title={content.company} alt={content.company} width={64} height={64} className="rounded-md"/>
				<div className="w-full mb-2">
					<div className="flex flex-col-reverse md:flex-row justify-between">
						<h3 className="font-bold">{content.title}</h3>
                        {content.date ? (
						    <span className="text-sm md:text-base">
                                {content.date}
						    </span>) : null
                        }
					</div>
					<h4>
                        {content.company}
					</h4>
			        {content.technologies ? (
                        <p>
					        <i>Technologies: {content.technologies.join(", ")}</i>
			            </p>) : null
                    }
				</div>
			</div>
			{content.project ? (
                <p>
					<strong>Project</strong>: {content.project}
			    </p>) : null
            }
            {content.summary ? (
                <ul className="list-disc ml-4 mt-4">
                    {content.summary.map((sentence: string, index: number) => (
                        <li className="mt-1" key={index}>{sentence}</li>        
                    ))}
                </ul>) : null
            }
			{content.modules ? (
                <ul className="list-none mt-4">
                    {Object.keys(content.modules).map((subject: string, index: number) => (
                        <li className="mt-1" key={index}>
                            <strong>{subject} Modules</strong>: {content.modules[subject].join(", ")}</li>        
                    ))}
			    </ul>) : null
            }
		</div>
    );
};

export { InfoBoard };

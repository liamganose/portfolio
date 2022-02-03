import React from "react";

import { Experience } from "Molecules/Experience";
import { Education } from "Molecules/Education";
import { Icon } from "Atoms/Icon";

const Work: React.FC = () => {
    return (
        <>
            <h2 className="headline mt-12 mb-4 text-4xl">Skills</h2>
            <h2 className="headline mt-12 mb-4 text-4xl">Experience</h2>
		    <Experience />
            <h2 className="headline mt-12 mb-4 text-4xl">Education</h2>
            <Education />
            <div className="flex justify-center mt-8">
			    <a href="/cv-2022.pdf" target="_blank" className="group flex gap-2 whitespace-nowrap">
				    <div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
					    <Icon icon="download" />
    				</div>
	    			<div className="block headline group-hover:text-purple-500 dark:group-hover:text-off-white">
		    			Download my CV
			    	</div>
			    </a>
		    </div>
        </>
    );
};

export { Work };

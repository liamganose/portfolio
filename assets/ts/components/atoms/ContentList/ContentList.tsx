import React from "react";

export interface ContentListItem {
    name: str
    image: str
    url: str
}

export interface ContentListProps {
    content: Array<ContentListItem>
}

const ContentList: React.FC = ({ content }: ContentListProps) => {
    return (
        <ul className="relative w-full flex gap-4 snap-x scroll-mandatory overflow-x-auto pb-4">
			{content.map((content) => (
                <li className="snap-center shrink-0 p-1 rounded-md w-[128px] h-[128px] transition-all bg-transparent hover:bg-gradient-to-r hover:from-blue-start hover:to-blue-stop dark:hover:from-purple-start dark:hover:via-purple-middle dark:hover:to-purple-stop" key={content.name}>
			        <a href={content.url} target="_blank" rel="noopener noreferrer" >
				        <img src={`/images/${content.image}`} title={content.name} alt={content.name} width={128} height={128} />
			        </a>
		        </li>
			))}
		</ul>
    ); 
};

export { ContentList, ContentListProps, ContentListItem };

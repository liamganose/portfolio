import React from "react";

import { SocialIcons } from "Atoms/SocialIcons";

const Footer: React.FC = () => {
    return (
        <footer className="flex justify-between mt-20 px-4 md:px-20 py-8">
            <span>&copy; {new Date().getFullYear()} Liam Ganose</span>
            <SocialIcons profiles={[
                {name: "Github", url: "https://www.github.com/liamganose", icon: "github"},
                {name: "LinkedIn", url: "https://www.linkedin.com/in/liamganose", icon: "linkedin"},
                {name: "Spotify", url: "https://open.spotify.com/user/lganose1", icon: "spotify"}
            ]} />
        </footer>
    );
};

export { Footer };

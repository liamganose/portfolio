import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="flex justify-between mt-20 px-4 md:px-20 py-8">
            <span>&copy; {new Date().getFullYear()} Liam Ganose</span>
        </footer>
    );
};

export { Footer };

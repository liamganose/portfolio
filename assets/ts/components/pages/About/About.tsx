import React from 'react';

import { ContentList, ContentListProps, ContentListItem } from "Atoms/ContentList";

const About = () => {
    const podcasts: ContentListProps<ContentListItem> = [
        {"name": "99% Invisible", "url": "https://open.spotify.com/show/2VRS1IJCTn2Nlkg33ZVfkM?si=29788887f10d439f", "image": "99-percent.jpg"},
        {"name": "The Always Sunny Podcast", "url": "https://open.spotify.com/show/0xDEeqWuoMNBUFGNrhIz6L?si=f7bf7feab6d14ff6", "image": "always-sunny.jpg"},
        {"name": "Developer Tea", "url": "https://open.spotify.com/show/02fM1JHpt9HmHGp482K71b?si=10e033f677b04821", "image": "developer-tea.jpg"},
        {"name": "Dissect", "url": "https://open.spotify.com/show/2b025hq3gJ17tQdxS3aV43?si=5c300ae6e4754d3b", "image": "dissect.jpg"},
        {"name": "Grounded with Louis Theroux", "url": "https://open.spotify.com/show/4mCovOfuUDnEju95HXGD8o?si=405a365f25d74ec8", "image": "grounded.jpg"}
    ];

    const playlists: ContentListProps<ContentListItem> = [
        {"name": "Pigeons & Planes", "url": "https://open.spotify.com/playlist/65xSncKQzG6Suseh5gfYP1?si=2ca620042293463f", "image": "pigs-and-planes.jpg"},
        {"name": "Derrick does Disco", "url": "https://open.spotify.com/playlist/2Qp38vp9fmDQiDPqtewFvd", "image": "disco-derrick.jpg"},
        {"name": "Ogre Time", "url": "https://open.spotify.com/playlist/5pl3oHiEV6Em7mbelyjJxy", "image": "ogre-time.jpg"},
        {"name": "Good Morning Jazz", "url": "https://open.spotify.com/playlist/37i9dQZF1DX71VcjjnyaBQ", "image": "good-morning-jazz.jpg"},
        {"name": "F L O W", "url": "https://open.spotify.com/playlist/1rde2kT9MJ3MfhDQ7tVe4d", "image": "flow.jpg"},
        {"name": "relaxation sunday jazz rap", "url": "https://open.spotify.com/playlist/3e20TwbzUZDlxv6nKt3oeg", "image": "relaxation-jazz-rap.jpg"},
        {"name": "Hip Hop Mix", "url": "https://open.spotify.com/playlist/37i9dQZF1EQnqst5TRi17F", "image": "hip-hop-mix.jpg"},
        {"name": "isolation and all that", "url": "https://open.spotify.com/playlist/5Uxs9egqfO17TLIMImK7mc", "image": "isolation.jpg"}
    ];

    return (
        <>
            <h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8 lg:leading-loose">
				Hey, I&apos;m Liam
			</h1>
			<h2 className="font-bold text-xl md:text-2xl mb-8">
				Software Engineer in London, UK
			</h2>
			<p>
                I graduated from Lancaster University nearly four years ago 
                with a degree in Computer Science and Mathematics. After that I moved 
                to London and started working as a data science consultant at PwC
                where I then transitioned into software engineering. I have since 
                joined The Voleon Group - where I am now working as a production / 
                software engineer.
            </p>
			<p className="my-4">
                I am 24 years old and have been coding for as a long as I can remember.
                I first started learning HTML at age 11 as my older brother was building 
                websites and I found it really cool. I then learned Lua so that I could 
                write custom addons for a video game I used to love; which also taught me 
                a lot about servers, networks and databases. Nowadays my main language is
                Python but I can still comfortably write C++, JavaScript, TypeScript and SQL 
                - and I'm always trying to learn more. Currently I'm trying to learn Elixir, 
                which is in-part why I made this website.
            </p>
            <p>
                Aside from programming, I'm really into sports. I've been playing hockey since
                I was 6 and still play twice a week. On my free evenings I love to cook and I 
                also try to go to a gig once or twice a month (covid permitting).
            </p>
			<h2 className="headline mt-6 mb-2 text-4xl leading-loose">Podcasts I listen to</h2>
            <ContentList content={podcasts} />
			<h2 className="headline mt-6 mb-2 text-4xl leading-loose">Playlists I listen to</h2>
            <ContentList content={playlists} />
        </>
    );
};

export { About };

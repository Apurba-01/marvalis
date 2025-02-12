"use client";

import { useState, useEffect } from "react";
import Card from "./StoriesCard";
import URL from "./URLGen";

function Stories() {
    const [stories, setStories] = useState([]);
    const storieslist = async () => {
        const res = await fetch(URL("stories"));
        const data = await res.json();
        console.log(data);
        return data;
    };

    useEffect(() => {
        const getStories = async () => {
            const storiesFromServer = await storieslist();
            setStories(storiesFromServer.data.results);
        };
        getStories();
    }, []);

    return (
        <>
            <h1 className=" text-2xl uppercase text-center">Stories</h1>
            <div className="w-full grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 gap-3">
                {stories.map((stories) => (
                    <Card key={stories.id} stories={stories} />
                ))}
            </div>
        </>
    );
}

export default Stories;

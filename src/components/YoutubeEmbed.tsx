import React from 'react';

export default ({ videoUrl }: { videoUrl: string }) => {
    const videoId = videoUrl.replace('https://www.youtube.com/watch?v=', '');

    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

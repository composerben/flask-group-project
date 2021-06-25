import React from 'react';


export default function Comment({comment}) {
    return (
        <div>
            <p>
                {comment.body}
            </p>
        </div>
    )
}

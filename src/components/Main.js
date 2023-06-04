import React from 'react'
import StoryGallery from './StoryGallery';
import WritePostContainer from './WritePostContainer';
import Post from './Post';

export default function Main() {
    return (
        <div class="main-content">
            <StoryGallery/>
            <WritePostContainer/>
            <Post name={'John Nichlson'} date={'June 24 2022, 14:40 pm'} image={'feed-image-1'}/>
            <Post name={'John Nichlson'} date={'June 24 2022, 14:40 pm'} image={'feed-image-2'}/>
            <Post name={'John Nichlson'} date={'June 24 2022, 14:40 pm'} image={'feed-image-3'}/>
            <Post name={'John Nichlson'} date={'June 24 2022, 14:40 pm'} image={'feed-image-4'}/>
            <Post name={'John Nichlson'} date={'June 24 2022, 14:40 pm'} image={'feed-image-5'}/>
            
            <button type="button" class="load-more-btn">
                Load More
            </button>
        </div>
    )
}

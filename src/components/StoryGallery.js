import React from 'react'
import Story from './Story'

export default function StoryGallery() {
    return (
        <div className="story-gallery">
            <Story image={'upload'} text={'Post Story'} classname={'story1'}/>
            <Story image={'member-1'} text={'Alison'} classname={'story2'}/>
            <Story image={'member-2'} text={'Jackson'} classname={'story3'}/>
            <Story image={'member-3'} text={'Samona'} classname={'story4'}/>
            <Story image={'member-4'} text={'John Doe'} classname={'story5'}/>
        </div>
    )
}

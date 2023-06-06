import React from 'react'
import Navbar from './Navbar'
import ProfileDetails from './ProfileDetails'
import WritePostContainer from './WritePostContainer'
import Post from './Post'
import ProfileIntro from './ProfileIntro'

export default function Profile() {
    return (
        <>
            <Navbar />

            <div class="profile-container">
                <img src={require(`../images/cover.png`)} class="cover-img" alt='cover' />

                <ProfileDetails
                    name={'Jack Nichelson'}
                    follower={'120 Friends - 20 mutual'}
                    images={[
                        'member-1.png',
                        'member-2.png',
                        'member-3.png',
                        'member-4.png',
                    ]}
                />

                <div class="profile-info">
                    <div class="info-col">
                        <ProfileIntro
                            intro={true}
                            title={'Intro'}
                            para={
                                'Believe in yourself and you can do unbelivable things.'
                            }
                            data={[
                                {
                                    name: 'Director at 99media Ltd',
                                    image: 'profile-job',
                                },
                                {
                                    name: 'Studied at Amity University',
                                    image: 'profile-study',
                                },
                                {
                                    name: 'Went to DPS Tehran',
                                    image: 'profile-study',
                                },
                                {
                                    name: 'Live in Iran, Isfahan',
                                    image: 'profile-home',
                                },
                                {
                                    name: 'From Tehrna, Iran',
                                    image: 'profile-location',
                                },
                            ]}
                        />
                        <ProfileIntro
                            intro={false}
                            title={'Photos'}
                            link={'All Photos'}
                            classBox={'photo-box'}
                            data={[
                                {
                                    image: 'photo1',
                                },
                                {
                                    image: 'photo2',
                                },
                                {
                                    image: 'photo3',
                                },
                                {
                                    image: 'photo4',
                                },
                                {
                                    image: 'photo5',
                                },
                                {
                                    image: 'photo6',
                                },
                            ]}
                        />
                        <ProfileIntro
                            intro={false}
                            title={'Friends'}
                            link={'All Friends'}
                            classBox={'friends-box'}
                            para={'120 (10 mutual)'}
                            data={[
                                {
                                    image: 'member-1',
                                    description: 'Joseph N',
                                },
                                {
                                    image: 'member-2',
                                    description: 'Natasha N',
                                },
                                {
                                    image: 'member-3',
                                    description: 'Natasha N',
                                },
                                {
                                    image: 'member-4',
                                    description: 'Natasha N',
                                },
                                {
                                    image: 'member-5',
                                    description: 'Natasha N',
                                },
                                {
                                    image: 'member-6',
                                    description: 'Natasha N',
                                },
                                {
                                    image: 'member-7',
                                    description: 'Natasha N',
                                },
                                {
                                    image: 'member-8',
                                    description: 'Natasha N',
                                },
                                {
                                    image: 'member-9',
                                    description: 'Natasha N',
                                },
                            ]}
                        />
                    </div>
                    <div class="post-col">
                        <WritePostContainer />
                        <Post
                            name={'John Nichlson'}
                            date={'June 24 2022, 14:40 pm'}
                            image={'feed-image-1'}
                        />
                        <Post
                            name={'John Nichlson'}
                            date={'June 24 2022, 14:40 pm'}
                            image={'feed-image-2'}
                        />
                        <Post
                            name={'John Nichlson'}
                            date={'June 24 2022, 14:40 pm'}
                            image={'feed-image-3'}
                        />
                        <Post
                            name={'John Nichlson'}
                            date={'June 24 2022, 14:40 pm'}
                            image={'feed-image-4'}
                        />
                        <Post
                            name={'John Nichlson'}
                            date={'June 24 2022, 14:40 pm'}
                            image={'feed-image-5'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

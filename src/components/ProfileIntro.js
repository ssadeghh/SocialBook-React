import React from 'react'

export default function ProfileIntro(props) {
    const { intro, title, para, data, link, classBox } = props
    return (
        <div>
            {intro ? (
                <div class="profile-intro">
                    <h3>{title}</h3>
                    <p class="intro-text">
                        {para}
                        <img src={require(`../images/feeling.png`)} />
                    </p>
                    <hr />
                    <ul>
                        {data.map((item) => (
                            <li>
                                <img
                                    src={require(`../images/${item.image}.png`)}
                                />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div class="profile-intro">
                    <div class="title-box">
                        <h3>{title}</h3>
                        <a href="#">{link}</a>
                    </div>
                    {para ? <p>{para}</p> : ''}
                    <div class={`${classBox}`}>
                        {data.map((item) => (
                            <div>
                                <img
                                    src={require(`../images/${item.image}.png`)}
                                />
                                {item.description ? <p>{item.description}</p> : ''}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

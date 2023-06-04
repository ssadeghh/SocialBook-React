import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Event from './Event';
import OnlineTest from './OnlineTest';

export default function RightSidebar() {
    return (
        <div class="right-sidebar">
            <div class="sidebar-title">
                <h4>Events</h4>
                <a href="#">See All</a>
            </div>

            <Event dateNum={'18'} dateMonth={'March'} title={'Social Media'}/>
            <Event dateNum={'22'} dateMonth={'June'} title={'Media Marketing'}/>
            
            <div class="sidebar-title">
                <h4>Advertisement</h4>
                <a href="#">Close</a>
            </div>
            <img src={require(`../images/advertisement.png`)} class="sidebar-ads"/>
            <div class="sidebar-title">
                <h4>Conversation</h4>
                <a href="#">Hide Chat</a>
            </div>

            <OnlineTest image={'member-1'} name={'Alison Mina'}/>
            <OnlineTest image={'member-2'} name={'Jakson Aston'}/>
            <OnlineTest image={'member-3'} name={'Samona Rose'}/>
        </div>
    )
}

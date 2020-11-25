import React from "react";
import Meeting from "./meeting/Meeting";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col m6 s12">
                            <h1>Meeting Moderator</h1>
                            <p>Meeting Moderator is a Collaboration tool to be used with your teams. Start By Creating a meeting, then share the link with your team.</p>
                            <p>Add topics and capture your notes</p>
                        </div>
                        <div class="col m6 s12"> <Meeting></Meeting></div>
                    
                        <div class="card-panel valign-wrapper">
                        <i class="material-icons red-text">info_outline</i>
                            <span class="black-text"> Be on the lookout for v2 where Meeting Moderator will actually moderate your meeting</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

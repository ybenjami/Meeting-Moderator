import React from "react";

export const Header = (props) => {
    return (
        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo hide-on-small-only"> <i class="material-icons">event_note</i>Meeting Moderator</a>
          <a href="#" class="brand-logo hide-on-med-and-up"> <i class="material-icons">event_note</i>Moderator</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="meeting">Meetings</a></li>
            <li><a href="/">Create</a></li>
            <li><a href="collapsible.html">Complain</a></li>
          </ul>
        </div>
      </nav>
    )
}
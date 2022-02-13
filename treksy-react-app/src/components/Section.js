import React from 'react';
import '../styles/Sections.css'

function Section(props) {
    return <div class="about">
        <hr size="5" noshade/>
        <div class="row details">
            <div class="col col-md content">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button className="btn btn-outline-primary">Learn More</button>
            </div>

            <div class="col col-md image">
                <img src={`${props.imgSrc}`} alt="image" />
            </div>
        </div>
    </div>;
}

export default Section;

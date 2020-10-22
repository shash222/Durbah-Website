import React, { Component } from 'react';
import '../CSS/Spinner.css';

export default class Spinner extends Component {

    state = {
        loadingWord: "DURBAH",
    }

    componentDidMount() {
        var elems = document.getElementsByClassName('durbahCharacter')
        Array.prototype.map.call(elems, (elem, i) => {
            elem.style.animationDelay = .15 * (i + 2) + "s"
            elem.style.left = i * 50 + "px"
        })
    }

    render() {
        return (
            <div className="spinnerContainer">

                <p lang="ar">السلام عليكم ورحمة الله وبركاته</p>
                <div className="loaderContainer">
                    {Array.from(this.state.loadingWord).map((c, i) => (
                        <span key={`durbahCharacter${i}`} className="durbahCharacter">{c}</span>
                    ))}
                </div>
            </div>
        )
    }
}
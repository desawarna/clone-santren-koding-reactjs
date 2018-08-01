import React, { Component } from 'react'
import Header from './Header';
import Card from './Card';
import Visi from './Visi';
import Publish from './Publish';
import Sponsor from './Sponsor';
import Contact from './Contact';


export default class Main extends Component {
    render() {
        return (
            <div className="bg">
                <Header />
                <Card />
                <Visi />
                <Publish />
                <Sponsor />
                <Contact />
            </div>
        )
    }
}

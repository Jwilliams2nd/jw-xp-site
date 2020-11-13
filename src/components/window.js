import React, { Component, Fragment } from 'react';
import windowStyles from "./styles/window.module.scss";
import Draggable from 'react-draggable';
const images = require.context("../../public/images", true);

class Window extends Component{

    imageRef = React.createRef();
    capTitleRef = React.createRef();
    capYearRef = React.createRef();
    capMatRef = React.createRef();
    capDimRef = React.createRef();
    leftButRef = React.createRef();
    rightButRef = React.createRef();

    handleImageSelect = (e) => {
        console.log(e.target.attributes[1].nodeValue);
        let selectedWork;
        e.target.localName === "img" ? selectedWork = this.props.library[e.target.id] : selectedWork = this.props.library[e.target.attributes[1].nodeValue];
        const libSize = this.props.library.length;
        const imageNode = this.imageRef.current;
        const capTitleNode = this.capTitleRef.current;
        const capYearNode = this.capYearRef.current;
        const capMatNode = this.capMatRef.current;
        const capDimNode = this.capDimRef.current;
        const leftButNode = this.leftButRef.current;
        const rightButNode = this.rightButRef.current;
        imageNode.src = images(`./${selectedWork.type}/${selectedWork.file}.jpg`);
        imageNode.alt = `${selectedWork.title}`;
        capTitleNode.innerText = `${selectedWork.title}`;
        capYearNode.innerText = `${selectedWork.year}`;
        capMatNode.innerText = `${selectedWork.materials}`;
        capDimNode.innerText = `${selectedWork.dimensions}`;
        leftButNode.attributes[1].nodeValue = `${selectedWork.id - 1 >= 0 ? selectedWork.id - 1 : libSize-1}`;
        rightButNode.attributes[1].nodeValue = `${selectedWork.id + 1 < libSize ? selectedWork.id + 1 : 0}`;
    }    
    render(){
        const posStyle = {
            position: "fixed",
            left: this.props.name === "Painting" ?
                    "100px" : 
                    this.props.name === "Videos" ?
                        "120px" :
                        this.props.name === "Sculpture" ?
                        "140px" : "160px",
            top: this.props.name === "Painting" ?
                    "30px" : 
                    this.props.name === "Videos" ?
                        "50px" :
                        this.props.name === "Sculpture" ?
                        "70px" : "90px",
            }
        return(
            <Draggable
                axis="both"
                handle=".handle"
            >
            {this.props.active && !this.props.hidden ? 
                <div className={windowStyles.container} style={posStyle}>
                    <div className="handle">
                        <div className={windowStyles.titleBar}>
                            <p>{this.props.name}</p>
                            <button id={this.props.name} onClick={this.props.handleCloseWindow}>X</button>    
                        </div>
                    </div>
                    <div className={windowStyles.toolBar}>
                        <ul className={windowStyles.menus}>
                            <li>File</li>
                            <li>Edit</li>
                            <li>View</li>
                        </ul>
                    </div>
                    <div className={windowStyles.content}>
                        <aside className={windowStyles.caption}>
                            <div className={windowStyles.panel}>
                                <div className={windowStyles.panheader}>
                                    <p ref={this.capTitleRef}>{this.props.library[0].title}</p>
                                </div>
                                <ul className={windowStyles.panbody}>
                                    <li ref={this.capYearRef}>{this.props.library[0].year}</li>
                                    <li ref={this.capMatRef}>{this.props.library[0].materials}</li>
                                    <li ref={this.capDimRef}>{this.props.library[0].dimensions}</li>
                                </ul>
                            </div>
                        </aside>
                    {this.props.library ?
                        <Fragment>
                            <div className={windowStyles.bigimg}>
                                <div className={windowStyles.imgcont}>
                                    <img ref={this.imageRef} src={images(`./${this.props.library[0].type}/${this.props.library[0].file}.jpg`)} alt={this.props.library[0].title}/>
                                </div>
                                <div className={windowStyles.imgnav}>
                                    <button
                                        id="l"
                                        ref={this.leftButRef}
                                        form={this.props.library[0].id - 1}
                                        onClick={this.handleImageSelect}
                                    >|&lsaquo;
                                    </button>
                                    <button
                                        id="r" 
                                        ref={this.rightButRef}
                                        form={this.props.library[0].id + 1}
                                        onClick={this.handleImageSelect}
                                    >&rsaquo;|
                                    </button>
                                </div>
                            </div>
                            <div className={windowStyles.gallery}>
                                {this.props.library.map(({ type, title, file, id }, idx)=>
                                    <button
                                        className={windowStyles.button}
                                        key={idx}
                                        form={id}
                                        onClick={this.handleImageSelect}
                                    >
                                        <img
                                            key={idx}
                                            id={id}
                                            src={images(`./${type}/${file}.jpg`)}
                                            alt={title}
                                        />
                                    </button>
                                )}
                            </div>
                        </Fragment>
                        :
                        null
                    }
                    </div>
                </div>
                :
                <div></div>
            }
                
            </Draggable>
        )
    }
}

export default Window;

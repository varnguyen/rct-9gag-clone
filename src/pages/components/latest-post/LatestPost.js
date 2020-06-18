
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import './LatestPost.scss';

const masonryOptions = {
    transitionDuration: 0
};

const style = {
    backgroundColor: 'white',
    paddingTop: '20px',
    paddingBottom: '15px',
    overflow: 'auto',
    position: '-webkit-sticky',
    position: 'sticky',
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }

const dummyData = [
    { src: '/assets/images/default-img.png', title: 'Wondering what will happen next in the couple of weeks since there is a lot happening since this terrible year started' },
    { src: 'https://img-9gag-fun.9cache.com/photo/adVXvmQ_460swp.webp', title: 'GVN 02' },
    { src: 'https://img-9gag-fun.9cache.com/photo/an41ZV0_460swp.webp', title: 'GVN 03' },
    { src: 'https://img-9gag-fun.9cache.com/photo/a1WXgOP_460swp.webp', title: 'Wondering what will happen next in the couple of weeks since there is a lotarted' },
    { src: 'https://img-9gag-fun.9cache.com/photo/aP7WdNg_460swp.webp', title: 'GVN 05' },
    { src: 'https://img-9gag-fun.9cache.com/photo/aK73Z3b_460swp.webp', title: 'GVN 06' },
    { src: '/assets/images/default-img.png', title: 'GVN 07' },
    { src: '/assets/images/default-img.png', title: 'GVN 08' },
    { src: '/assets/images/default-img.png', title: 'GVN 09' },
    { src: '/assets/images/default-img.png', title: 'GVN 10' },
    { src: '/assets/images/default-img.png', title: 'GVN 11' },
    { src: '/assets/images/default-img.png', title: 'GVN 12' }
]

class LatestPost extends Component {
    render() {
        const childElements = dummyData.map(function (element) {
            return (
                <div className="col-lg-6 item-latest-post" key={element.title}>
                    <img src={element.src} />
                    <p className="title txt-cut">{element.title}</p>
                </div>
            );
        });
        return (
            <Masonry
                style={style}
                className={'my-gallery-class'} // default ''
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
                onClick={this.handleClick}
            >
                {childElements}
            </Masonry>
        );
    }
}

// function mapStateToProps(state) {
//     return {

//     };
// }

export default LatestPost;

// export default connect(
//     mapStateToProps,
// )(LatestPost);
import React, { Component } from 'react';
import '../styles/Posts.css';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';

class Posts extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }

    }
    componentWillMount() {
        this.props.fetchPosts();

        console.log('this.getState()', this.props.posts);
        console.log('this.props.posts', this.props.posts);
        console.log('props', this.props);

    }
    onDelete(e) {
        var item = this.props.posts;
        // console.log('item: ', item);
        console.log('e: ', e);

    }
    render() {
        const postItems = this.props.posts.map(post => (
            <div className="card" key={post.id}>
                <div className="card-header" >
                    <span onClick={this.onDelete}><i className="fas fa-times"></i></span>
                    <h3>{post.title}</h3>
                </div>

                <div className="card-body">{post.body}</div>
            </div>
        ));
        return (
            <div>
                <h1>Post</h1>
                {postItems}
            </div>
        );
    }
}
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})
export default connect(mapStateToProps, { fetchPosts })(Posts);
// export default Posts;

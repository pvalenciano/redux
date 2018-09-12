import React, { Component } from 'react';
// import Posts from './Posts';
import '../styles/Postform.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';
class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

    }
    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        //call
        this.props.createPost(post);
    }
    render() {
        return (
            <div>

                <div className="card" id="new-post">
                    <div className="card-header">
                        <h1 >Add Post</h1>
                    </div>
                    <form className="card-body" onSubmit={this.onSubmit}>
                        <label>Title</label>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-file"></i></span>
                            <input id="title" type="text" onChange={this.onChange} value={this.state.title} className="form-control" name="title" placeholder="Title" />
                        </div>

                        <label>Body</label>

                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                            <input id="body" type="text" onChange={this.onChange} value={this.state.body} className="form-control" name="body" placeholder="Body" />
                        </div>

                        <br></br>
                        <div className="card-footer">
                            <button className="btn btn-info" type="submit">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}
PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};
export default connect(null, { createPost })(PostForm);
// export default PostForm;

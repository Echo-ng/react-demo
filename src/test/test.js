import React, {
	Component
} from 'reat';
import {
	render
} from 'react-dom';

class LikeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			liked: false
		};
	}
	handleClick(e) {
		this.setState({
			liked: !this.state.liked
		});
	}
	render() {
		const text = this.state.liked ? 'like' : 'haven\'t liked';
		return (
			<p onclick={this.handleClick.bind(this)}>
				You {text} this. Click to toggle.
			</p>
		)
	}
}

import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes : 0,
      Dislikes : 0,
      totalrating : 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }));
      }

    }
  }
  render() {
    return (
     <>
     <div className='content-rating'>
      <p> Amr Emam</p>
      <div className='rating-buttons'>
        <button className='like-button' onClick={this.state.handleLike}>
          Like ({this.state.likes})
        </button>
        <button className='dislike-button'>
          Dislike ({this.state.Dislikes})
        </button>
        <p>Total Rating:</p>

      </div>
     </div>
     <h1>Text Content Rating</h1>
     </>
    );
  }
}

export default ContentRating;

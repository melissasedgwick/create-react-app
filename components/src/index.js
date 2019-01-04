import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM"
        commentText="This is a message!" avatar={Faker.image.avatar()}/>
      <CommentDetail author="Alex" timeAgo="Today at 2:30PM"
        commentText="Another message!" avatar={Faker.image.avatar()}/>
      <CommentDetail author="Charlie" timeAgo="Yesterday at 3:25PM"
        commentText="And again!" avatar={Faker.image.avatar()}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))

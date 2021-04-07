// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import {
  CommentsListStyledComponent,
  CommentBody,
  CommentAvatar,
  CommentMeta,
  CommentAuthor,
  CommentDate,
  CommentReply,
  CommentContent,
  CommentListChildren,
} from '~/styled-components/blog/CommentsList';
import AppImage from '~/components/shared/AppImage';
import { IComment } from '~/interfaces/comment';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  comments: IComment[];
  level?: number;
}

function CommentsList(props: Props) {
  const { comments, level = 0, className, ...rootProps } = props;

  const rootClasses = classNames(className);

  return (
    <div className={rootClasses} {...rootProps}>
      <CommentsListStyledComponent>
        {comments.map((comment, index) => (
          <li key={index}>
            <div>
              <CommentBody>
                <CommentAvatar>
                  <AppImage src={comment.avatar} />
                </CommentAvatar>
                <CommentMeta>
                  <CommentAuthor>{comment.author}</CommentAuthor>
                  <CommentDate>{comment.date}</CommentDate>
                </CommentMeta>
                <CommentReply>
                  <button type="button" className="btn btn-xs btn-light">
                    Reply
                  </button>
                </CommentReply>
                <CommentContent>{comment.text}</CommentContent>
              </CommentBody>
            </div>
            {comment.children && comment.children.length > 0 && (
              <CommentListChildren>
                <CommentsList comments={comment.children} level={level + 1} />
              </CommentListChildren>
            )}
          </li>
        ))}
      </CommentsListStyledComponent>
    </div>
  );
}

export default CommentsList;

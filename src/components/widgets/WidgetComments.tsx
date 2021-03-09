// react
import React from 'react';
// application
import AppLink from '~/components/shared/AppLink';
import { IComment } from '~/interfaces/comment';
import {
  WidgetWidgetComments,
  WidgetHeader,
  WidgetCommentsBody,
  WidgetCommentsList,
  WidgetCommentsItem,
  WidgetAutherComments,
  WidgetCommentsContent,
  WidgetCommentsMeta,
  WidgetCommentsDate,
  WidgetCommentsName,
} from '~/styled-components/widget/WidgetComments';
interface Props {
  widgetTitle?: React.ReactNode;
  comments: IComment[];
}

function WidgetComments(props: Props) {
  const { widgetTitle, comments } = props;

  return (
    <WidgetWidgetComments>
      {widgetTitle && (
        <WidgetHeader>
          <h4>{widgetTitle}</h4>
        </WidgetHeader>
      )}

      <WidgetCommentsBody>
        <WidgetCommentsList>
          {comments.map((comment, index) => (
            <WidgetCommentsItem key={index}>
              <WidgetAutherComments>
                <AppLink href="/">{comment.author}</AppLink>
              </WidgetAutherComments>
              <WidgetCommentsContent>{comment.text}</WidgetCommentsContent>
              <WidgetCommentsMeta>
                <WidgetCommentsDate>{comment.date}</WidgetCommentsDate>
                <WidgetCommentsName>
                  {'On '}
                  <AppLink href="/" title={comment.postTitle}>
                    {comment.postTitle}
                  </AppLink>
                </WidgetCommentsName>
              </WidgetCommentsMeta>
            </WidgetCommentsItem>
          ))}
        </WidgetCommentsList>
      </WidgetCommentsBody>
    </WidgetWidgetComments>
  );
}

export default WidgetComments;

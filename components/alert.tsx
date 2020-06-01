import React from 'react';
import Container from './container';
import cn from 'classnames';
import { SOURCE_CODE_URL } from '../lib/constants';

type Props = {
  preview?: boolean;
};

const Alert: React.FC<Props> = ({ preview }) => {
  return (
    <div
      className={cn(`border-b`, {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is a preview.{` `}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>
              {` `}
              to exit preview mode.
            </>
          ) : (
            <>
              <a
                href={`${SOURCE_CODE_URL}`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                The source code on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;

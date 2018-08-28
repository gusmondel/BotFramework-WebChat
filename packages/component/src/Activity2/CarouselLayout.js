import { Composer, Context, createBasicStyleSet, Flipper } from 'react-film';
import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import CarouselFilmStrip from './CarouselFilmStrip';

const ROOT_CSS = css({
  overflow: 'hidden',
  position: 'relative'
});

export default ({ activity, children }) => {
  const styleSet = createBasicStyleSet();

  return (
    <Composer>
      <Context.Consumer>
        { ({ scrollBarWidth }) =>
          <div className={ classNames(ROOT_CSS + '', styleSet.carousel + '') }>
            <CarouselFilmStrip activity={ activity }>
              { children }
            </CarouselFilmStrip>
            { scrollBarWidth !== '100%' &&
              <React.Fragment>
                <Flipper className={ styleSet.leftFlipper + '' } mode="left"><div>&lt;</div></Flipper>
                <Flipper className={ styleSet.rightFlipper + '' } mode="right"><div>&gt;</div></Flipper>
              </React.Fragment>
            }
          </div>
        }
      </Context.Consumer>
    </Composer>
  );
}

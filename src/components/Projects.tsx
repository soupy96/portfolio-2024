import React from 'react';
import styled from 'styled-components';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import { LeftArrow, RightArrow } from './arrows';
import { Card } from './card';
import { DragDealer } from './DragDealer';
import '../assets/css/hideScrollbar.css';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = 'test';
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function Projects() {
  const [items] = React.useState(getItems);

  // NOTE: for drag by mouse
  const dragState = React.useRef(new DragDealer());

  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragState.current.dragMove(ev, (posDiff: number) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const [selected, setSelected] = React.useState<string>('');
  const handleItemClick = (itemId: string) => () => {
    if (dragState.current.dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : '');
  };

  return (
    <ProjectBox>
      <div className='example' style={{ paddingTop: '100px' }}>
        <div onMouseLeave={dragState.current.dragStop}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
            onMouseDown={() => dragState.current.dragStart}
            onMouseUp={() => dragState.current.dragStop}
            onMouseMove={handleDrag}
          >
            {items.map(({ id }) => (
              <Card
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
                onClick={handleItemClick(id)}
                selected={id === selected}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </ProjectBox>
  );
}

const ProjectBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

const SingleCard = styled.div`
  height: 700px;
  width: 500px;
  background-color: aquamarine;
  margin: 0px 50px;
`;

export default Projects;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

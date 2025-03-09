import { Modal } from 'antd';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import { useRef, useState } from 'react';
import { DragOutlined } from '@ant-design/icons';

export const DraggableForm = (props: any) => {
  const {
    open,
    onCancel,
    footer = null,
    width = 800,
    modal,
  } = props;
  const [disabled, setDisabled] = useState(true);
  const draggleRef = useRef<HTMLDivElement>(null!);

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
  };

  return (
    <Modal open={open}
           onCancel={onCancel}
           footer={footer}
           destroyOnClose={true}
           width={width}
           title={
             <div
               className={'draggable-area'}
               title={'Draggable area'}
               onMouseOver={() => {
                 if (disabled) {
                   setDisabled(false);
                 }
               }}
               onMouseOut={() => {
                 setDisabled(true);
               }}
               onFocus={() => {
               }}
               onBlur={() => {
               }}
             >
               <DragOutlined />
             </div>
           }
           modalRender={(modal) => (
             <Draggable
               disabled={disabled}
               bounds={false}
               nodeRef={draggleRef}
               onStart={(event: any, uiData: any) => onStart(event, uiData)}
             >
               <div ref={draggleRef}>{modal}</div>
             </Draggable>
           )}
    >
      {modal}
    </Modal>
  );
};
import { useRef } from 'react';
import Draggable from 'react-draggable';
import Button from './Button.jsx';

export default function Window() {
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".drag-handle"
      cancel="button, input, textarea, a, [data-no-drag]"
      bounds="parent"
    >
      <div ref={nodeRef} className="w-[360px] bg-[#b6b6b6] shadow-lg overflow-hidden border-l-3 border-l-white border-t-3 border-t-white border-r-4 border-r-gray-600 border-b-4 border-b-gray-600;">
        <div className="drag-handle h-7 w-full flex items-center justify-between px-1 border-b cursor-move select-none bg-gradient-to-r from-blue-900 from-40% to-blue-400">
            <div className="px-1 font-win98 text-white">Ermmmmmm :3</div>
            <button className="h-5 w-5 bg-[#b6b6b6] chrome-edge"></button>
        </div>
        
        <div className="p-4 text-center">
          <h1 className="text-2xl mt-3 font-win98-bold">
            haiiii wurld :3
          </h1>
          <Button className="mt-5 hover:translate-x-[-1]" text="Go!" />
        </div>
      </div>
    </Draggable>
  );
}

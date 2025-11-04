import Window from './Window.jsx';
import Taskbar from './Taskbar.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#007C7C] relative flex items-center justify-center overflow-hidden">
      <Window />
      <Taskbar />
    </div>
  );
}

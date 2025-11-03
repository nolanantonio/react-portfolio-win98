import Window from './Window.jsx';
import Action_Bar from './Action_Bar.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#007C7C] relative flex items-center justify-center overflow-hidden">
      <Window />
      <Action_Bar />
    </div>
  );
}

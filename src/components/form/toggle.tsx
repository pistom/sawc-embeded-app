interface ToggleProps {
  label?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Toggle = ({ label, checked, onChange }: ToggleProps) => {
  return <>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" checked={checked} onChange={onChange} />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      {label && <span className="absolute left-0 ml-1 text-xs text-gray-500">{label}</span>}
    </label>
  </>
}

export default Toggle;
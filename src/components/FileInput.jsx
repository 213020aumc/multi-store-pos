// src/components/FileInput.jsx

const FileInput = ({
  id,
  name,
  label,
  helpText,
  accepted,
  icon: Icon,
  value,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <label
          htmlFor={id}
          className="cursor-pointer bg-white border border-gray-300 rounded-lg flex items-center px-4 py-3 w-full text-gray-500 hover:bg-gray-50 transition-colors"
        >
          <Icon className="w-5 h-5 text-gray-400 mr-3" />
          <span className="flex-1 truncate">
            {value ? value.name : helpText}
          </span>
        </label>
        <input
          id={id}
          name={name}
          type="file"
          className="sr-only" // Visually hide the default input
          accept={accepted}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FileInput;

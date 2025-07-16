// Social Login Button Component
const SocialButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center py-3 px-4 border border-gray-300 rounded-full hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-200 transform hover:scale-105"
    >
      {children}
    </button>
  );
};

export default SocialButton;

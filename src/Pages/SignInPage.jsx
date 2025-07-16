import Header from "../components/Header";
import SignInForm from "../components/SignInForm";
// Main Sign In Page Component
const SignInPage = ()=> {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 via-emerald-600 to-cyan-600 flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <SignInForm />
      </main>
    </div>
  );
}
export default SignInPage;
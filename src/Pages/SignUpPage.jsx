// src/pages/SignUpPage.jsx

import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 via-emerald-600 to-cyan-600 flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <SignUpForm />
      </main>
    </div>
  );
}
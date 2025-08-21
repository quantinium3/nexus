export default function Hero() {
  return (
    <section className="bg-sky-400 text-white">
      <div className="container mx-auto text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-8">Access Anything Anytime</p>
        <a href="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </a>
      </div>
    </section>
  );
}

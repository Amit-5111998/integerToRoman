import "./App.css";
import Home from "./pages";

function App() {
  return (
    <div>
      <div
        className="min-h-screen bg-gray-100 py-6 px-6 flex flex-col justify-center sm:py-12 bg-cover"
        style={{ backgroundImage: 'url("https://picsum.photos/id/1018/1000")' }}
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div
            className="relative px-2 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200"
            style={{ backdropFilter: "blur(20px)" }}
          >
            <div className="max-w-md mx-auto">
              <Home />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

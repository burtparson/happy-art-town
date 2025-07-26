import React, { useState, useEffect } from 'react';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data
  const mockCourses = [
    {
      id: 1,
      title: "Rainbow Drawing Fun",
      ageGroup: "2-4",
      image: "🌈",
      description: "Learn to draw beautiful rainbows!"
    },
    {
      id: 2,
      title: "Animal Friends",
      ageGroup: "5-8", 
      image: "🐱",
      description: "Draw cute animals!"
    }
  ];

  const mockArticles = [
    {
      id: 1,
      title: "Color Mixing Tips",
      image: "🎨",
      excerpt: "Amazing color combinations!"
    },
    {
      id: 2,
      title: "Drawing Your Pet",
      image: "🐕",
      excerpt: "Step-by-step pet drawing!"
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCourses(mockCourses);
      setArticles(mockArticles);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎨</div>
          <h1 className="text-2xl font-bold text-purple-600">Loading Happy Art Town...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center space-x-3">
          <div className="text-4xl">🎨</div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Happy Art Town</h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 rounded-3xl p-8 text-center mb-12">
          <div className="text-6xl mb-4">🎨✨</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Welcome to Happy Art Town!
          </h2>
          <p className="text-lg text-white mb-8">
            Where creativity comes alive! 🚀
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all">
            Start Creating!
          </button>
        </section>

        {/* Data Status */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-medium text-blue-800">Data Loaded:</span>
            <span className="text-blue-600">{courses.length} courses • {articles.length} articles</span>
          </div>
        </div>

        {/* Courses Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            📚 Popular Courses ({courses.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4 text-center">{course.image}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h4>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                    Ages {course.ageGroup}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white py-3 rounded-xl font-medium">
                  Start Learning! 🎨
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Articles Section */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            📝 Latest Articles ({articles.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{article.image}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{article.title}</h4>
                    <p className="text-gray-600 mb-3">{article.excerpt}</p>
                    <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-lg font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Button */}
      <button 
        className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all"
        onClick={() => window.location.reload()}
      >
        <span className="text-2xl">✨</span>
      </button>
    </div>
  );
};

export default App;
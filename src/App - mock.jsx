import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Brush, Star, Trophy, Heart, BookOpen, Users, Camera, Sparkles, Home, PaintBucket, FileText, ChevronRight, Play, Clock, Award } from 'lucide-react';

const HappyArtTown = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample data for courses
  const courses = [
    {
      id: 1,
      title: "Rainbow Drawing Fun",
      ageGroup: "2-4",
      image: "🌈",
      duration: "15 mins",
      lessons: 5,
      difficulty: "Beginner",
      description: "Learn to draw beautiful rainbows with simple steps!"
    },
    {
      id: 2,
      title: "Animal Friends",
      ageGroup: "5-8",
      image: "🐱",
      duration: "20 mins",
      lessons: 8,
      difficulty: "Easy",
      description: "Draw cute animals step by step with fun techniques!"
    },
    {
      id: 3,
      title: "Superhero Comics",
      ageGroup: "9-12",
      image: "🦸",
      duration: "30 mins",
      lessons: 12,
      difficulty: "Intermediate",
      description: "Create your own superhero comics and stories!"
    },
    {
      id: 4,
      title: "Magic Landscapes",
      ageGroup: "5-8",
      image: "🏰",
      duration: "25 mins",
      lessons: 10,
      difficulty: "Easy",
      description: "Paint magical castles and fairy tale worlds!"
    },
    {
      id: 5,
      title: "Ocean Adventures",
      ageGroup: "2-4",
      image: "🐠",
      duration: "12 mins",
      lessons: 6,
      difficulty: "Beginner",
      description: "Explore underwater worlds through art!"
    },
    {
      id: 6,
      title: "Space Exploration",
      ageGroup: "9-12",
      image: "🚀",
      duration: "35 mins",
      lessons: 15,
      difficulty: "Advanced",
      description: "Draw planets, rockets, and alien worlds!"
    }
  ];

  // Sample data for articles
  const articles = [
    {
      id: 1,
      title: "5 Fun Color Mixing Tips",
      category: "tips",
      image: "🎨",
      excerpt: "Discover amazing color combinations that will make your art pop!",
      readTime: "3 min read",
      date: "Today"
    },
    {
      id: 2,
      title: "Drawing Your Pet",
      category: "tutorials",
      image: "🐕",
      excerpt: "Step-by-step guide to drawing your furry friends!",
      readTime: "5 min read",
      date: "2 days ago"
    },
    {
      id: 3,
      title: "Famous Kid Artists",
      category: "inspiration",
      image: "⭐",
      excerpt: "Meet amazing young artists from around the world!",
      readTime: "4 min read",
      date: "1 week ago"
    },
    {
      id: 4,
      title: "Make Art with Nature",
      category: "tips",
      image: "🍃",
      excerpt: "Use leaves, flowers, and stones to create beautiful art!",
      readTime: "6 min read",
      date: "3 days ago"
    }
  ];

  const ageGroups = [
    { value: 'all', label: 'All Ages', icon: '👶' },
    { value: '2-4', label: '2-4 Years', icon: '🧸' },
    { value: '5-8', label: '5-8 Years', icon: '🎈' },
    { value: '9-12', label: '9-12 Years', icon: '🎭' }
  ];

  const categories = [
    { value: 'all', label: 'All Topics', icon: '📚' },
    { value: 'tips', label: 'Drawing Tips', icon: '💡' },
    { value: 'tutorials', label: 'Tutorials', icon: '📖' },
    { value: 'inspiration', label: 'Inspiration', icon: '✨' }
  ];

  const filteredCourses = selectedAgeGroup === 'all' 
    ? courses 
    : courses.filter(course => course.ageGroup === selectedAgeGroup);

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const Navigation = () => (
    <motion.nav 
      className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-4 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl">🎨</div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Happy Art Town</h1>
        </motion.div>
        
        <div className="flex space-x-2 md:space-x-4">
          {[
            { id: 'home', icon: Home, label: 'Home' },
            { id: 'courses', icon: BookOpen, label: 'Courses' },
            { id: 'articles', icon: FileText, label: 'Articles' }
          ].map(({ id, icon: Icon, label }) => (
            <motion.button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                activeSection === id 
                  ? 'bg-white text-purple-600 shadow-lg' 
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
              <span className="hidden md:inline">{label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );

  const HomePage = () => (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-12"
    >
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        variants={fadeInUp}
      >
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="%23fff" stroke-width="2"%3E%3Cpath d="M8 8l24 24M32 8l-24 24"/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '40px 40px'
          }}
        />
        
        <motion.div
          className="relative z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-6xl md:text-8xl mb-4">🎨✨</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Welcome to Happy Art Town!
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Where creativity comes alive! Join thousands of young artists learning to draw, paint, and create amazing art!
          </p>
          <motion.button
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Creating! 🚀
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Featured Courses */}
      <motion.section variants={fadeInUp}>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
            <BookOpen className="mr-3 text-blue-500" />
            Popular Courses
          </h3>
          <motion.button
            onClick={() => setActiveSection('courses')}
            className="text-blue-500 hover:text-blue-600 flex items-center font-medium"
            whileHover={{ x: 5 }}
          >
            View All <ChevronRight size={20} />
          </motion.button>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {courses.slice(0, 3).map((course) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-200"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4 text-center">{course.image}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h4>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {course.duration}
                </span>
                <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                  {course.ageGroup} years
                </span>
              </div>
              <motion.button
                className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white py-3 rounded-xl font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Learning! 🎨
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Latest Articles */}
      <motion.section variants={fadeInUp}>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
            <FileText className="mr-3 text-green-500" />
            Latest Articles
          </h3>
          <motion.button
            onClick={() => setActiveSection('articles')}
            className="text-green-500 hover:text-green-600 flex items-center font-medium"
            whileHover={{ x: 5 }}
          >
            Read More <ChevronRight size={20} />
          </motion.button>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
        >
          {articles.slice(0, 2).map((article) => (
            <motion.div
              key={article.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              variants={fadeInUp}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{article.image}</div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{article.title}</h4>
                  <p className="text-gray-600 mb-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );

  const CoursesPage = () => (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-8"
    >
      <motion.div variants={fadeInUp}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center">
          <BookOpen className="mr-3 text-blue-500" />
          Art Courses for Every Age
        </h2>
        
        {/* Age Group Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {ageGroups.map((group) => (
            <motion.button
              key={group.value}
              onClick={() => setSelectedAgeGroup(group.value)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                selectedAgeGroup === group.value
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{group.icon}</span>
              <span>{group.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
      >
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-200"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            layout
          >
            <div className="text-5xl mb-4 text-center">{course.image}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 flex items-center">
                  <Clock size={14} className="mr-1" />
                  Duration:
                </span>
                <span className="font-medium">{course.duration}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 flex items-center">
                  <Play size={14} className="mr-1" />
                  Lessons:
                </span>
                <span className="font-medium">{course.lessons}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 flex items-center">
                  <Award size={14} className="mr-1" />
                  Level:
                </span>
                <span className="font-medium">{course.difficulty}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                Ages {course.ageGroup}
              </span>
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
            
            <motion.button
              className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white py-3 rounded-xl font-medium flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={18} className="mr-2" />
              Start Course
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );

  const ArticlesPage = () => (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-8"
    >
      <motion.div variants={fadeInUp}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center">
          <FileText className="mr-3 text-green-500" />
          Art Tips & Inspiration
        </h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.value
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={staggerContainer}
      >
        {filteredArticles.map((article) => (
          <motion.article
            key={article.id}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            variants={fadeInUp}
            whileHover={{ y: -3 }}
            layout
          >
            <div className="flex items-start space-x-4">
              <div className="text-4xl">{article.image}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium capitalize">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock size={14} className="mr-1" />
                    {article.readTime}
                  </span>
                  <motion.button
                    className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-lg font-medium flex items-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Read More
                    <ChevronRight size={16} className="ml-1" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Navigation />
      
      <main className="max-w-6xl mx-auto p-6">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && <HomePage key="home" />}
          {activeSection === 'courses' && <CoursesPage key="courses" />}
          {activeSection === 'articles' && <ArticlesPage key="articles" />}
        </AnimatePresence>
      </main>
      
      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      >
        <Sparkles size={24} />
      </motion.button>
    </div>
  );
};

export default HappyArtTown;
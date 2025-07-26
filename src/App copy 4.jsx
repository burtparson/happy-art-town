import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Brush, Star, Trophy, Heart, BookOpen, Users, Camera, Sparkles, Home, PaintBucket, FileText, ChevronRight, Play, Clock, Award, RefreshCw, AlertCircle, ArrowLeft } from 'lucide-react';

// Real Supabase client setup - UNCOMMENT when you have credentials
// To use real Supabase:
// 1. Install: npm install @supabase/supabase-js
// 2. Create .env file with your Supabase credentials
// 3. Uncomment the lines below:

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Mock settings data that simulates Supabase structure
const mockSettingsData = [
  { key: 'site_name', value: 'Happy Art Town', description: 'Name of the website' },
  { key: 'site_description', value: 'Where creativity comes alive! Join thousands of young artists learning to draw, paint, and create amazing art!', description: 'Website description' },
  { key: 'contact_email', value: 'admin@happyarttown.com', description: 'Contact email for the site' },
  { key: 'max_courses_per_user', value: '10', description: 'Maximum courses a user can create' }
];

// Mock data that simulates Supabase structure
const mockCoursesData = [
  {
    id: 1,
    title: "Rainbow Drawing Fun",
    description: "Learn to draw beautiful rainbows with simple steps!",
    age_group: "2-4",
    image_emoji: "🌈",
    duration: "15 mins",
    lessons: 5,
    difficulty: "Beginner",
    is_published: true,
    created_at: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    title: "Animal Friends",
    description: "Draw cute animals step by step with fun techniques!",
    age_group: "5-8",
    image_emoji: "🐱",
    duration: "20 mins",
    lessons: 8,
    difficulty: "Easy",
    is_published: true,
    created_at: "2024-01-14T10:00:00Z"
  },
  {
    id: 3,
    title: "Superhero Comics",
    description: "Create your own superhero comics and stories!",
    age_group: "9-12",
    image_emoji: "🦸",
    duration: "30 mins",
    lessons: 12,
    difficulty: "Intermediate",
    is_published: true,
    created_at: "2024-01-13T10:00:00Z"
  },
  {
    id: 4,
    title: "Magic Landscapes",
    description: "Paint magical castles and fairy tale worlds!",
    age_group: "5-8",
    image_emoji: "🏰",
    duration: "25 mins",
    lessons: 10,
    difficulty: "Easy",
    is_published: true,
    created_at: "2024-01-12T10:00:00Z"
  },
  {
    id: 5,
    title: "Ocean Adventures",
    description: "Explore underwater worlds through art!",
    age_group: "2-4",
    image_emoji: "🐠",
    duration: "12 mins",
    lessons: 6,
    difficulty: "Beginner",
    is_published: true,
    created_at: "2024-01-11T10:00:00Z"
  },
  {
    id: 6,
    title: "Space Exploration",
    description: "Draw planets, rockets, and alien worlds!",
    age_group: "9-12",
    image_emoji: "🚀",
    duration: "35 mins",
    lessons: 15,
    difficulty: "Advanced",
    is_published: true,
    created_at: "2024-01-10T10:00:00Z"
  }
];

const mockArticlesData = [
  {
    id: 1,
    title: "5 Fun Color Mixing Tips",
    excerpt: "Discover amazing color combinations that will make your art pop!",
    content: `# 5 Fun Color Mixing Tips

Color mixing is one of the most exciting parts of creating art! Here are some amazing tips that will help you create beautiful colors in your artwork.

## 1. Start with Primary Colors
The three primary colors are red, blue, and yellow. These are special because you can't make them by mixing other colors together! But you can use them to make almost any other color you want.

## 2. Make Secondary Colors
When you mix two primary colors together, you get secondary colors:
- Red + Blue = Purple 💜
- Blue + Yellow = Green 💚  
- Yellow + Red = Orange 🧡

## 3. Create Earth Colors
Mix a tiny bit of the opposite color to make natural earth tones:
- Add a little green to red to make brown
- Add a little orange to blue to make gray
- Add a little purple to yellow to make olive

## 4. Warm and Cool Colors
- Warm colors (red, orange, yellow) make things feel cozy and sunny ☀️
- Cool colors (blue, green, purple) make things feel calm and peaceful 🌙

## 5. Practice Makes Perfect!
The best way to learn color mixing is to experiment! Try mixing different amounts of colors and see what happens. Keep a color mixing chart to remember your favorite combinations.

Remember: There are no mistakes in art, only happy accidents! Have fun exploring colors! 🎨`,
    category: "tips",
    image_emoji: "🎨",
    read_time: "3 min read",
    is_published: true,
    created_at: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    title: "Drawing Your Pet",
    excerpt: "Step-by-step guide to drawing your furry friends!",
    content: `# Drawing Your Pet

Drawing your beloved pet can be one of the most rewarding art projects! Whether you have a dog, cat, hamster, or any other furry friend, here's how to capture their personality on paper.

## Getting Started

### What You'll Need:
- Paper (any kind works!)
- Pencils (regular school pencils are perfect)
- Eraser
- Your pet (or a good photo)

## Step 1: Basic Shapes
Start by looking at your pet and imagining them as simple shapes:
- Head might be a circle or oval
- Body could be an oval or rectangle
- Legs are like cylinders or rectangles

Don't worry about details yet - just get the basic shape down!

## Step 2: Add the Features
Now add the important features:
- Eyes (usually two circles or ovals)
- Nose (often a triangle or heart shape)
- Mouth
- Ears (triangle or oval shapes)

## Step 3: Fur and Texture
Make your pet look fluffy by:
- Drawing short, quick strokes for short fur
- Using longer, curved lines for long fur
- Adding darker areas where shadows would be

## Step 4: Details That Matter
What makes your pet special?
- Unique markings or spots
- The way their ears sit
- Their favorite sleeping position
- That special look in their eyes

## Pro Tips:
- Start light with your pencil - you can always make lines darker
- Take breaks and look at your drawing from far away
- If something doesn't look right, that's okay! Keep practicing
- Your pet loves you no matter how the drawing turns out! 🐕💕

Remember: The goal isn't to make a perfect copy, but to capture what makes your pet special to you!`,
    category: "tutorials",
    image_emoji: "🐕",
    read_time: "5 min read",
    is_published: true,
    created_at: "2024-01-14T10:00:00Z"
  },
  {
    id: 3,
    title: "Famous Kid Artists",
    excerpt: "Meet amazing young artists from around the world!",
    content: `# Famous Kid Artists

Did you know that some of the world's most amazing artists started creating when they were kids just like you? Let's meet some incredible young artists who prove that age is just a number when it comes to creativity!

## Kieron Williamson - The "Mini Monet"
At just 7 years old, Kieron from England became famous for his beautiful landscape paintings. His artwork sells for thousands of dollars! He started painting when he was 5 and fell in love with capturing the beauty of nature.

**What we can learn:** It's never too early to start following your passion!

## Autumn de Forest
Autumn started painting when she was just 5 years old. By age 8, she was already having art exhibitions! She's known for her colorful, expressive paintings and has even painted portraits of famous people.

**What we can learn:** Don't be afraid to experiment with bright, bold colors!

## Akiane Kramarik
Akiane began drawing and painting at age 4. She's famous for her incredibly detailed and spiritual artwork. She taught herself to paint and became internationally known as a teenager.

**What we can learn:** You can teach yourself amazing skills with practice and dedication!

## Danie Nevins
This young artist from South Africa creates stunning wildlife paintings. She started painting animals when she was very young and uses her art to help protect endangered species.

**What we can learn:** Art can be used to help make the world a better place!

## Tips from Young Artists:

### 1. Practice Every Day
Even 15 minutes of drawing or painting helps you improve!

### 2. Don't Compare Yourself
Your art is unique and special - don't worry about what others are doing.

### 3. Experiment Freely
Try new materials, colors, and techniques. Some of the best discoveries happen by accident!

### 4. Share Your Work
Show your art to family and friends. Their encouragement will help you grow!

### 5. Have Fun!
The most important thing is to enjoy creating. When you have fun, it shows in your artwork! ✨

Remember: Every famous artist was once a beginner. What matters most is that you keep creating and never give up on your dreams! 🌟`,
    category: "inspiration",
    image_emoji: "⭐",
    read_time: "4 min read",
    is_published: true,
    created_at: "2024-01-13T10:00:00Z"
  },
  {
    id: 4,
    title: "Make Art with Nature",
    excerpt: "Use leaves, flowers, and stones to create beautiful art!",
    content: `# Make Art with Nature

Nature is full of amazing art supplies just waiting to be discovered! Let's explore how you can create beautiful artwork using things you can find outside.

## Nature's Art Supply Store

### Leaves 🍃
- Different shapes and sizes for templates
- Beautiful colors, especially in fall
- Great for printing and stamping
- Can be arranged into patterns

### Flowers and Petals 🌸
- Natural paintbrushes
- Beautiful colors for dyes
- Can be pressed and dried
- Perfect for collages

### Stones and Rocks 🪨
- Smooth surfaces for painting
- Different shapes inspire creativity
- Can be arranged into sculptures
- Great for making patterns

### Sticks and Twigs 🌿
- Natural drawing tools
- Can be bundled into brushes
- Perfect for sculptures
- Great for making frames

## Fun Nature Art Projects

### 1. Leaf Printing
- Place a leaf under paper
- Rub gently with a crayon
- Watch the leaf pattern appear!
- Try different leaf shapes

### 2. Stone Painting
- Find smooth, flat stones
- Clean them with water
- Paint them with fun designs
- Turn them into story stones!

### 3. Nature Collages
- Collect different materials
- Arrange them on paper
- Glue them down carefully
- Create scenes or abstract designs

### 4. Flower Pressing
- Pick fresh flowers
- Place between heavy books
- Wait a few weeks
- Use in art projects!

### 5. Sand and Dirt Art
- Different colored soils make natural paints
- Mix with a little water
- Paint on rocks or paper
- Creates earthy, natural colors

## Nature Art Tips

### Be Respectful
- Only take what you need
- Don't damage living plants
- Leave natural areas better than you found them
- Ask permission if on private property

### Safety First
- Wash hands after collecting materials
- Check for bugs or thorns
- Avoid poisonous plants
- Have an adult help with tools

### Preservation
- Some natural art won't last forever - that's okay!
- Take photos of temporary creations
- Spray finished pieces with fixative (adults only)
- Store pressed flowers properly

### Get Creative!
- Combine natural materials with regular art supplies
- Make nature journals
- Create seasonal collections
- Start a nature art club with friends!

## The Best Part About Nature Art

Creating with natural materials connects us to the world around us. Every leaf, stone, and flower is unique - just like your artwork will be! Plus, you're recycling materials that would otherwise just go back to the earth.

Nature art teaches us to:
- Observe details in the world around us
- Appreciate natural beauty
- Work with what we have
- Respect our environment

So grab a basket, head outside, and see what amazing art supplies nature has waiting for you today! 🌱🎨

*Remember: The best nature art comes from your imagination and creativity, not from copying others!*`,
    category: "tips",
    image_emoji: "🍃",
    read_time: "6 min read",
    is_published: true,
    created_at: "2024-01-12T10:00:00Z"
  }
];

const HappyArtTown = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [courses, setCourses] = useState([]);
  const [articles, setArticles] = useState([]);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Load data from Supabase on component mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('🔄 Loading data from Supabase...');

      // Load settings from Supabase
      const { data: settingsData, error: settingsError } = await supabase
        .from('settings')
        .select('*');

      // Load published courses from Supabase
      const { data: coursesData, error: coursesError } = await supabase
        .from('courses')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      // Load published articles from Supabase  
      const { data: articlesData, error: articlesError } = await supabase
        .from('articles')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      // Handle settings data
      if (settingsError) {
        console.error('❌ Error loading settings:', settingsError);
        // Fall back to mock settings data
        console.log('📦 Using mock settings data');
        const mockSettingsObject = {};
        mockSettingsData.forEach(setting => {
          mockSettingsObject[setting.key] = setting.value;
        });
        setSettings(mockSettingsObject);
      } else {
        console.log('✅ Raw settings data:', settingsData);
        // Transform settings array into object for easy access
        const settingsObject = {};
        (settingsData || []).forEach(setting => {
          settingsObject[setting.key] = setting.value;
        });
        setSettings(settingsObject);
      }

      if (coursesError) {
        console.error('❌ Error loading courses:', coursesError);
        // Fall back to mock data
        console.log('📦 Using mock courses data');
        setCourses(mockCoursesData.map(course => ({
          id: course.id,
          title: course.title,
          ageGroup: course.age_group,
          image: course.image_emoji,
          duration: course.duration,
          lessons: course.lessons,
          difficulty: course.difficulty,
          description: course.description,
          created_at: course.created_at
        })));
      } else {
        console.log('✅ Raw courses data:', coursesData);
        // Transform Supabase data to match component structure
        const transformedCourses = (coursesData || []).map(course => ({
          id: course.id,
          title: course.title,
          ageGroup: course.age_group,
          image: course.image_emoji,
          duration: course.duration,
          lessons: course.lessons,
          difficulty: course.difficulty,
          description: course.description,
          created_at: course.created_at
        }));
        setCourses(transformedCourses);
      }

      if (articlesError) {
        console.error('❌ Error loading articles:', articlesError);
        // Fall back to mock data
        console.log('📦 Using mock articles data');
        setArticles(mockArticlesData.map(article => ({
          id: article.id,
          title: article.title,
          category: article.category,
          image: article.image_emoji,
          excerpt: article.excerpt,
          content: article.content,
          readTime: article.read_time,
          date: new Date(article.created_at).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
          }),
          created_at: article.created_at
        })));
      } else {
        console.log('✅ Raw articles data:', articlesData);
        const transformedArticles = (articlesData || []).map(article => ({
          id: article.id,
          title: article.title,
          category: article.category,
          image: article.image_emoji,
          excerpt: article.excerpt,
          content: article.content,
          readTime: article.read_time,
          date: new Date(article.created_at).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
          }),
          created_at: article.created_at
        }));
        setArticles(transformedArticles);
      }

      setLastUpdated(new Date());
      console.log('🎉 Data loading completed!');
      
    } catch (err) {
      console.error('💥 Error loading data:', err);
      setError(err.message);
      
      // Fall back to mock data on any error
      console.log('📦 Using mock data due to error');
      
      // Settings fallback
      const mockSettingsObject = {};
      mockSettingsData.forEach(setting => {
        mockSettingsObject[setting.key] = setting.value;
      });
      setSettings(mockSettingsObject);
      
      setCourses(mockCoursesData.map(course => ({
        id: course.id,
        title: course.title,
        ageGroup: course.age_group,
        image: course.image_emoji,
        duration: course.duration,
        lessons: course.lessons,
        difficulty: course.difficulty,
        description: course.description,
        created_at: course.created_at
      })));
      
      setArticles(mockArticlesData.map(article => ({
        id: article.id,
        title: article.title,
        category: article.category,
        image: article.image_emoji,
        excerpt: article.excerpt,
        content: article.content,
        readTime: article.read_time,
        date: new Date(article.created_at).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        }),
        created_at: article.created_at
      })));
      
      setLastUpdated(new Date());
    } finally {
      setLoading(false);
    }
  };

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
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {settings.site_name || 'Happy Art Town'}
            </h1>
            {lastUpdated && (
              <p className="text-xs text-white text-opacity-80">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            )}
          </div>
        </motion.div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <motion.button
            onClick={loadData}
            className="flex items-center space-x-2 px-3 py-2 bg-white bg-opacity-20 text-white rounded-lg text-sm hover:bg-opacity-30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            title="Refresh content from database"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            <span className="hidden md:inline">{loading ? 'Loading...' : 'Refresh'}</span>
          </motion.button>
          
          {[
            { id: 'home', icon: Home, label: 'Home' },
            { id: 'courses', icon: BookOpen, label: 'Courses' },
            { id: 'articles', icon: FileText, label: 'Articles' }
          ].map(({ id, icon: Icon, label }) => (
            <motion.button
              key={id}
              onClick={() => {
                setActiveSection(id);
                setSelectedArticle(null); // Reset selected article when changing sections
              }}
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

  const LoadingSpinner = () => (
    <motion.div 
      className="flex items-center justify-center py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex items-center space-x-4">
        <motion.div
          className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="text-center">
          <p className="text-lg font-medium text-gray-700">Loading from database...</p>
          <p className="text-sm text-gray-500">Fetching latest content</p>
        </div>
      </div>
    </motion.div>
  );

  const ErrorDisplay = () => (
    <motion.div 
      className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center space-x-3">
        <AlertCircle className="w-6 h-6 text-red-500" />
        <div>
          <h3 className="font-medium text-red-800">Database Connection Error</h3>
          <p className="text-sm text-red-600 mt-1">{error}</p>
          <p className="text-sm text-blue-600 mt-1">Using mock data for demonstration</p>
          <button 
            onClick={loadData}
            className="mt-2 text-sm text-red-700 underline hover:text-red-800"
          >
            Try again
          </button>
        </div>
      </div>
    </motion.div>
  );

  const DataStatus = () => (
    <motion.div 
      className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <div className="text-sm">
          <span className="font-medium text-blue-800">Data Status:</span>
          <span className="text-blue-600 ml-2">
            {courses.length} courses • {articles.length} articles • {Object.keys(settings).length} settings
          </span>
          {error && <span className="text-red-600 ml-2">(using mock data)</span>}
        </div>
      </div>
    </motion.div>
  );

  const ArticleDetailPage = () => {
    if (!selectedArticle) return null;

    // Function to render markdown-like content
    const renderContent = (content) => {
      const lines = content.split('\n');
      const elements = [];
      let currentParagraph = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line.startsWith('# ')) {
          if (currentParagraph.length > 0) {
            elements.push(
              <p key={`p-${elements.length}`} className="text-gray-700 leading-relaxed mb-4">
                {currentParagraph.join(' ')}
              </p>
            );
            currentParagraph = [];
          }
          elements.push(
            <h1 key={`h1-${elements.length}`} className="text-3xl font-bold text-gray-800 mb-6 mt-8 first:mt-0">
              {line.substring(2)}
            </h1>
          );
        } else if (line.startsWith('## ')) {
          if (currentParagraph.length > 0) {
            elements.push(
              <p key={`p-${elements.length}`} className="text-gray-700 leading-relaxed mb-4">
                {currentParagraph.join(' ')}
              </p>
            );
            currentParagraph = [];
          }
          elements.push(
            <h2 key={`h2-${elements.length}`} className="text-2xl font-bold text-gray-800 mb-4 mt-6">
              {line.substring(3)}
            </h2>
          );
        } else if (line.startsWith('### ')) {
          if (currentParagraph.length > 0) {
            elements.push(
              <p key={`p-${elements.length}`} className="text-gray-700 leading-relaxed mb-4">
                {currentParagraph.join(' ')}
              </p>
            );
            currentParagraph = [];
          }
          elements.push(
            <h3 key={`h3-${elements.length}`} className="text-xl font-semibold text-gray-800 mb-3 mt-5">
              {line.substring(4)}
            </h3>
          );
        } else if (line.startsWith('- ')) {
          if (currentParagraph.length > 0) {
            elements.push(
              <p key={`p-${elements.length}`} className="text-gray-700 leading-relaxed mb-4">
                {currentParagraph.join(' ')}
              </p>
            );
            currentParagraph = [];
          }
          
          // Look ahead for more list items
          const listItems = [line.substring(2)];
          let j = i + 1;
          while (j < lines.length && lines[j].trim().startsWith('- ')) {
            listItems.push(lines[j].trim().substring(2));
            j++;
          }
          i = j - 1; // Skip the processed items
          
          elements.push(
            <ul key={`ul-${elements.length}`} className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
              {listItems.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          );
        } else if (line === '') {
          if (currentParagraph.length > 0) {
            elements.push(
              <p key={`p-${elements.length}`} className="text-gray-700 leading-relaxed mb-4">
                {currentParagraph.join(' ')}
              </p>
            );
            currentParagraph = [];
          }
        } else if (line.length > 0) {
          currentParagraph.push(line);
        }
      }
      
      // Add any remaining paragraph
      if (currentParagraph.length > 0) {
        elements.push(
          <p key={`p-${elements.length}`} className="text-gray-700 leading-relaxed mb-4">
            {currentParagraph.join(' ')}
          </p>
        );
      }
      
      return elements;
    };

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Back Button */}
        <motion.button
          onClick={() => setSelectedArticle(null)}
          className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft size={20} />
          <span>Back to Articles</span>
        </motion.button>

        {/* Article Header */}
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-start space-x-6 mb-6">
            <div className="text-6xl">{selectedArticle.image}</div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                {selectedArticle.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {selectedArticle.excerpt}
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <span className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{selectedArticle.readTime}</span>
                </span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full capitalize">
                  {selectedArticle.category}
                </span>
                <span>{selectedArticle.date}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="prose prose-lg max-w-none">
            {renderContent(selectedArticle.content)}
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div 
          className="bg-gray-50 rounded-2xl p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">More Articles You Might Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles
              .filter(article => article.id !== selectedArticle.id && article.category === selectedArticle.category)
              .slice(0, 2)
              .map((article) => (
                <motion.div
                  key={article.id}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  whileHover={{ y: -2 }}
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{article.image}</div>
                    <div>
                      <h4 className="font-medium text-gray-800">{article.title}</h4>
                      <p className="text-sm text-gray-500">{article.readTime}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const HomePage = () => (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-12"
    >
      {error && <ErrorDisplay />}
      {!loading && <DataStatus />}
      
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
            Welcome to {settings.site_name || 'Happy Art Town'}!
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            {settings.site_description || 'Where creativity comes alive! Join thousands of young artists learning to draw, paint, and create amazing art!'}
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

      {loading ? <LoadingSpinner /> : (
        <>
          {/* Featured Courses */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
                <BookOpen className="mr-3 text-blue-500" />
                Popular Courses
                <span className="ml-3 bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                  {courses.length}
                </span>
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
            
            {courses.length === 0 && !loading && (
              <motion.div 
                className="text-center py-12 bg-gray-50 rounded-2xl"
                variants={fadeInUp}
              >
                <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
                <h4 className="text-lg font-medium text-gray-600 mb-2">No courses available</h4>
                <p className="text-gray-500">Check back later or create some in the admin panel!</p>
              </motion.div>
            )}
          </motion.section>

          {/* Latest Articles */}
          <motion.section variants={fadeInUp}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
                <FileText className="mr-3 text-green-500" />
                Latest Articles
                <span className="ml-3 bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">
                  {articles.length}
                </span>
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
            
            {articles.length === 0 && !loading && (
              <motion.div 
                className="text-center py-12 bg-gray-50 rounded-2xl"
                variants={fadeInUp}
              >
                <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                <h4 className="text-lg font-medium text-gray-600 mb-2">No articles available</h4>
                <p className="text-gray-500">Check back later or create some in the admin panel!</p>
              </motion.div>
            )}
          </motion.section>
        </>
      )}
    </motion.div>
  );

  const CoursesPage = () => (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-8"
    >
      {error && <ErrorDisplay />}
      {!loading && <DataStatus />}
      
      <motion.div variants={fadeInUp}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center">
          <BookOpen className="mr-3 text-blue-500" />
          Art Courses for Every Age
          <span className="ml-3 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-lg">
            {filteredCourses.length}
          </span>
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

      {loading ? <LoadingSpinner /> : (
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
      )}
      
      {!loading && filteredCourses.length === 0 && (
        <motion.div 
          className="text-center py-16 bg-gray-50 rounded-2xl"
          variants={fadeInUp}
        >
          <BookOpen size={64} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-medium text-gray-600 mb-2">No courses found</h3>
          <p className="text-gray-500">Try selecting a different age group or create new courses in the admin panel!</p>
        </motion.div>
      )}
    </motion.div>
  );

  const ArticlesPage = () => (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-8"
    >
      {error && <ErrorDisplay />}
      {!loading && <DataStatus />}
      
      <motion.div variants={fadeInUp}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center">
          <FileText className="mr-3 text-green-500" />
          Art Tips & Inspiration
          <span className="ml-3 bg-green-100 text-green-600 px-3 py-1 rounded-full text-lg">
            {filteredArticles.length}
          </span>
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

      {loading ? <LoadingSpinner /> : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
        >
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-green-200"
              variants={fadeInUp}
              whileHover={{ y: -3 }}
              layout
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-4xl flex-shrink-0">{article.image}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs capitalize">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-4">
                      <span>{article.readTime}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.button
                className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-white py-3 rounded-xl font-medium flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedArticle(article)}
              >
                <FileText size={18} className="mr-2" />
                Read Article
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      )}
      
      {!loading && filteredArticles.length === 0 && (
        <motion.div 
          className="text-center py-16 bg-gray-50 rounded-2xl"
          variants={fadeInUp}
        >
          <FileText size={64} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-medium text-gray-600 mb-2">No articles found</h3>
          <p className="text-gray-500">Try selecting a different category or create new articles in the admin panel!</p>
        </motion.div>
      )}
    </motion.div>
  );

  // Main render function
  const renderActiveSection = () => {
    if (activeSection === 'articles' && selectedArticle) {
      return <ArticleDetailPage />;
    }
    
    switch (activeSection) {
      case 'home':
        return <HomePage />;
      case 'courses':
        return <CoursesPage />;
      case 'articles':
        return <ArticlesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection + (selectedArticle ? `-${selectedArticle.id}` : '')}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderActiveSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Footer */}
      <motion.footer 
        className="bg-gray-800 text-white py-8 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="text-3xl">🎨</div>
            <h3 className="text-2xl font-bold">{settings.site_name || 'Happy Art Town'}</h3>
          </div>
          <p className="text-gray-400 mb-4">
            {settings.site_description || 'Inspiring creativity in young artists around the world'}
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <span>© 2024 {settings.site_name || 'Happy Art Town'}</span>
            <span>•</span>
            <span>Made with ❤️ for kids</span>
            <span>•</span>
            <span>Data: {error ? 'Mock' : 'Live from Supabase'}</span>
            {settings.contact_email && (
              <>
                <span>•</span>
                <span>Contact: {settings.contact_email}</span>
              </>
            )}
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default HappyArtTown;
export default function GuideComponent() {
    const articles = [
      {
        id: 1,
        image: "/doc-6.jpg",
        alt: "Doctor performing health check-up",
        title: "The Importance of Regular Health Check-Ups",
        description:
          "Regular health check-ups are essential for early detection and prevention of potential health issues. Learn how scheduling routine appointments",
        date: "October 15, 2024",
        readTime: "2 min read",
      },
      {
        id: 2,
        image: "/doc-3.jpg",
        alt: "Telemedicine consultation",
        title: "Understanding Modern Telemedicine Services",
        description:
          "Telemedicine is revolutionizing the way we access healthcare",
        date: "October 15, 2024",
        readTime: "2 min read",
      },
      {
        id: 3,
        image: "/doc-6.jpg",
        alt: "Person managing stress",
        title: "Top 5 Tips for Managing Stress in a Busy Lifestyle",
        description:
          "Stress affects both your mental and physical health. Here are five",
        date: "October 8, 2024",
        readTime: "6 min read",
      },
      {
        id: 4,
        image: "/doc.jpg",
        alt: "Nutrition and health",
        title: "The Role of Nutrition in Disease Prevention",
        description:
          "Discover how advanced medical technologies and",
        date: "October 1, 2024",
        readTime: "4 min read",
      },
    ];
  
    return (
      <div className="md:max-w-7xl mx-auto md:px-4 px-1 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">
            Your Guide to Better Health and Wellness
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto text-sm">
            Explore our featured articles to stay updated on the latest healthcare trends, tips, and advancements.
          </p>
        </div>
  
        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-6 w-[90%] md:max-w-[85%] mx-auto">
          {/* Main Featured Article */}
          <div className="bg-white rounded-xl overflow-hidden hover:shadow-xs cursor-pointer">
            <img
              src={articles[0].image}
              alt={articles[0].alt}
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="p-3">
              <h2 className="text-lg font-bold mb-3">{articles[0].title}</h2>
              <p className="text-gray-600 mb-4 text-sm">
                {articles[0].description}
                <span className="text-purple-600 hover:text-purple-700 cursor-pointer ml-1">
                  Read more
                </span>
              </p>
              <div className="flex items-center text-xs text-gray-500 space-x-4 font-semibold ">
                <span>{articles[0].date}</span>
                <span>{articles[0].readTime}</span>
              </div>
            </div>
          </div>
  
          {/* Right Side Articles */}
          <div className="space-y-2">
            {articles.slice(1).map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row cursor-pointer hover:shadow-xs"
              >
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full md:w-40 h-32 object-cover rounded-2xl"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-1 text-sm">{article.title}</h3>
                  <p className="text-xs text-gray-600 mb-2">
                    {article.description}
                    <span className="text-purple-600 hover:text-purple-700 cursor-pointer ml-1">
                      Read more...
                    </span>
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4 font-semibold">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
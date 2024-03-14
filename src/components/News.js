import React from 'react';

function News() {
  // Mock news data
  const newsData = [
    { id: 1, title: 'News 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'News 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'News 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 4, title: 'News 4', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 5, title: 'News 5', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 6, title: 'News 6', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 7, title: 'News 7', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 8, title: 'News 8', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 9, title: 'News 9', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 10, title: 'News 10', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
  ];

  // Function to render news items
  const renderNewsItems = () => {
    return newsData.map(news => (
      <div key={news.id} className="news-item">
        <h3>{news.title}</h3>
        <p>{news.content}</p>
      </div>
    ));
  };

  return (
    <section className="news-container">
      <h2>Latest News</h2>
      <div className="grid-container">
        {renderNewsItems()}
      </div>
    </section>
  );
}

export default News;

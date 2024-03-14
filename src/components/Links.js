import React from 'react';

function Links() {
  // Mock links data
  const linksData = [
    { id: 1, title: 'Link 1', url: 'https://example.com/link1' },
    { id: 2, title: 'Link 2', url: 'https://example.com/link2' },
    { id: 3, title: 'Link 3', url: 'https://example.com/link3' },
    { id: 4, title: 'Link 4', url: 'https://example.com/link4' },
    { id: 5, title: 'Link 5', url: 'https://example.com/link5' },
    { id: 6, title: 'Link 6', url: 'https://example.com/link6' },
    { id: 7, title: 'Link 7', url: 'https://example.com/link7' },
    { id: 8, title: 'Link 8', url: 'https://example.com/link8' },
    { id: 9, title: 'Link 9', url: 'https://example.com/link9' },
    { id: 10, title: 'Link 10', url: 'https://example.com/link10' }
  ];

  // Function to render link items
  const renderLinkItems = () => {
    return linksData.map(link => (
      <div key={link.id} className="link-item">
        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
      </div>
    ));
  };

  return (
    <section className="links-container">
      <h2>Useful Links</h2>
      <div className="grid-container">
        {renderLinkItems()}
      </div>
    </section>
  );
}

export default Links;

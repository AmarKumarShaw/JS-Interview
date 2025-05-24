import React, { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'Why use React?',
      content: 'React makes it painless to create interactive UIs.',
    },
    {
      title: 'How does React work?',
      content: 'React uses a virtual DOM to efficiently update the UI.',
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      fontFamily: 'Arial, sans-serif',
      border: '1px solid #ddd',
      borderRadius: '6px',
      overflow: 'hidden',
    },
    item: {
      borderBottom: '1px solid #ccc',
    },
    button: {
      width: '100%',
      textAlign: 'left',
      padding: '16px',
      fontSize: '16px',
      fontWeight: 'bold',
      backgroundColor: '#f1f1f1',
      border: 'none',
      cursor: 'pointer',
      outline: 'none',
    },
    buttonHover: {
      backgroundColor: '#e2e2e2',
    },
    content: {
      padding: '16px',
      backgroundColor: '#fff',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      {data.map((item, index) => (
        <div key={index} style={styles.item}>
          <button
            style={styles.button}
            onClick={() => toggleItem(index)}
          >
            {item.title}
          </button>
          {openIndex === index && (
            <div style={styles.content}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

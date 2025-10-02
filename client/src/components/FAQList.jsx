import React from "react";

const FAQList = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return <p>Вопросов пока нет</p>;

  return (
    <div>
      {faqs.map((item, index) => (
        <details key={index}>
          <summary>{item.question}</summary>
          <div>{item.answer}</div>
        </details>
      ))}
    </div>
  );
};

export default FAQList;

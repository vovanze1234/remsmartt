import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQList = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
      {faqs.map((item, index) => (
        <div 
          key={index} 
          className={`faq-item ${openIndex === index ? "open" : ""}`}
          onClick={() => toggle(index)}
        >
          <div className="faq-question">
            <h3>{item.question}</h3>
            {openIndex === index ? <ChevronUp /> : <ChevronDown />}
          </div>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQList;

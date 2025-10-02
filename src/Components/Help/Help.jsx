
import React, { useState } from "react";
import "./Help.css";

function Help() {
  const faqs = [
    {
      question: "🍔 How can I place an order?",
      answer: "Browse our menu, select your favorite items, and click 'Add to Cart'. Then go to your cart and place your order."
    },
    {
      question: "💳 What payment methods are accepted?",
      answer: "We accept UPI, credit/debit cards, and cash on delivery."
    },
    {
      question: "❌ Can I cancel my order?",
      answer: "Yes! Orders can be cancelled within 10 minutes of placing them from your orders page."
    },
    {
      question: "📞 How do I contact support?",
      answer: "Email us at support@canteen.com or call +91-1234567890."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-container">
      <h1>🆘 Help & Support</h1>
      <p>Have questions? We're here to help you enjoy your meals!</p>

      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <h3 className="question">{faq.question}</h3>
            {openIndex === index && <p className="answer">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <div className="contact">
        <h2>Contact Us</h2>
        <p>Email: support@canteen.com</p>
        <p>Phone: +91-1234567890</p>
      </div>
    </div>
  );
}

export default Help;

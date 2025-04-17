"use client";
import React, { useState } from "react";

const FAQAccordion = () => {
  const faqs = [
    {
      question: "Kako mogu da naručim pergolu?",
      answer:
        "Možete nas kontaktirati putem telefona, emaila ili popunjavanjem kontakt forme na našoj stranici. Naš tim će vas kontaktirati kako bismo dogovorili sve detalje.",
    },
    {
      question: "Koji materijali se koriste za izradu pergola?",
      answer:
        "Naše pergole su izrađene od visokokvalitetnih materijala, uključujući pažljivo odabrano drvo i aluminijum, kako bi se osigurala dugotrajnost i otpornost na vremenske uslove.",
    },
    {
      question: "Da li nudite prilagođene dizajne?",
      answer:
        "Da, nudimo prilagođene dizajne koji odgovaraju vašim potrebama i stilu prostora. Naš tim će raditi sa vama kako bi kreirao savršenu pergolu za vaš prostor.",
    },
    {
      question: "Koliko traje proces izrade i montaže?",
      answer:
        "Proces izrade i montaže obično traje između 2 i 4 nedelje, u zavisnosti od složenosti projekta i trenutne dostupnosti materijala.",
    },
  ];

  return (
    <div className="bg-black p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-5xl font-panchang text-white mb-8 text-center">
        Često postavljana pitanja
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-xl font-bold text-white">{question}</h3>
        <span className="text-white text-2xl">{isOpen ? "-" : "+"}</span>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <p className="text-lg text-gray-400 leading-relaxed mt-4">{answer}</p>
      )}
    </div>
  );
};

export default FAQAccordion;

"use client";
import React, { useState } from "react";

const FAQAccordion = () => {
  // const faqs = [
  //   {
  //     question: "Kako mogu da naručim pergolu?",
  //     answer:
  //       "Možete nas kontaktirati putem telefona, emaila ili popunjavanjem kontakt forme na našoj stranici. Naš tim će vas kontaktirati kako bismo dogovorili sve detalje.",
  //   },
  //   {
  //     question: "Koji materijali se koriste za izradu pergola?",
  //     answer:
  //       "Naše pergole su izrađene od visokokvalitetnih materijala, uključujući pažljivo odabrano drvo i aluminijum, kako bi se osigurala dugotrajnost i otpornost na vremenske uslove.",
  //   },
  //   {
  //     question: "Da li nudite prilagođene dizajne?",
  //     answer:
  //       "Da, nudimo prilagođene dizajne koji odgovaraju vašim potrebama i stilu prostora. Naš tim će raditi sa vama kako bi kreirao savršenu pergolu za vaš prostor.",
  //   },
  //   {
  //     question: "Koliko traje proces izrade i montaže?",
  //     answer:
  //       "Proces izrade i montaže obično traje između 2 i 4 nedelje, u zavisnosti od složenosti projekta i trenutne dostupnosti materijala.",
  //   },
  // ];

  const faqs = [
    {
      question: "Da li izrađujete proizvode po meri?",
      answer:
        "Da, svi naši proizvodi se izrađuju prema vašim željama i potrebama. Svaki projekat je unikatan i prilagođen prostoru i stilu koji želite da postignete.",
    },
    {
      question: "Koliko traje izrada nakon što poručim?",
      answer:
        "Vreme izrade zavisi od kompleksnosti projekta, ali u proseku traje od 2 do 4 nedelje. Tačnu procenu dobijate nakon konsultacija i definisanja svih detalja.",
    },
    {
      question: "Da li radite montažu?",
      answer:
        "Da, pored izrade nudimo i kompletnu montažu na lokaciji. Naš tim se brine da sve bude postavljeno precizno i sigurno.",
    },
    {
      question: "Koje materijale koristite?",
      answer:
        "Koristimo kvalitetno, suvo drvo – najčešće smrču, bor i hrast, ali po želji radimo i sa drugim vrstama drveta. Svi materijali su tretirani i pripremljeni za dugotrajnu upotrebu na otvorenom.",
    },
    {
      question: "Da li radite i van mog grada?",
      answer:
        "Da, radimo isporuku i montažu širom Srbije, a moguće su i realizacije u regionu, u zavisnosti od projekta.",
    },
    {
      question: "Da li mogu da dobijem ponudu bez obaveze?",
      answer:
        "Naravno, slobodno nam pošaljite ideju, dimenzije ili fotografiju inspiracije, i mi ćemo vam poslati okvirnu ponudu.",
    },
    {
      question: "Kako se vrši plaćanje?",
      answer:
        "Plaćanje se vrši u dve faze – avans prilikom potvrde narudžbine, a ostatak po završetku radova ili montaže.",
    },
    {
      question: "Kako da održavam drvene površine?",
      answer:
        "Preporučujemo redovno čišćenje i povremeno premazivanje zaštitnim premazima, u zavisnosti od vremenskih uslova i izloženosti suncu i kiši. Dajemo i uputstvo za održavanje uz svaki proizvod.",
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

import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About the Car Rent Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. What is special about comparing rent car deals?</p>
                  <IconChevronDown />
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Comparing rent car deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better car models. You can find car
                  rent deals by researching online and comparing prices from
                  different rent companies.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. How do I find the car rent deals?</p>
                  <IconChevronDown />{" "}
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  You can find car rent deals by researching online and
                  comparing prices from different rent companies. Websites
                  such as Expedia, Kayak, and Travelocity allow you to compare
                  prices and view available rent options. It is also
                  recommended to sign up for email newsletters and follow rent
                  car companies on social media to be informed of any special
                  deals or promotions.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. How do I find such low rent car prices?</p>
                  <IconChevronDown />
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Book in advance: Booking your rent car ahead of time can
                  often result in lower prices. Compare prices from multiple
                  companies: Use websites like Kayak, Expedia, or Travelocity to
                  compare prices from multiple rent car companies. Look for
                  discount codes and coupons: Search for discount codes and
                  coupons that you can use to lower the rent price. Renting
                  from an off-airport location can sometimes result in lower
                  prices.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;

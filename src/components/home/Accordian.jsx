const Accordian = () => {
  return (
    <div className="my-20 px-8 w-3/4 mx-auto">
      <h1 className="my-16 text-center font-bold text-3xl">Frequently Asked Questions!</h1>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">Q: What brands do you carry at SneakerNook?</div>
        <div className="collapse-content">
          <p>
            A: SneakerNook carries a variety of top brands, including Nike, Adidas, Reebok, ASICS, and Converse, among
            others. We strive to offer a diverse selection to meet your style and comfort preferences.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Q: How can I find the right size for my sneakers?</div>
        <div className="collapse-content">
          <p>
            A: We provide a size chart on each product page to help you choose the correct size. If you have any
            questions about sizing, feel free to contact our customer support team, and we'll be happy to assist you.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Q: What is your return policy?</div>
        <div className="collapse-content">
          <p>
            A: We offer a hassle-free return policy. If you are not completely satisfied with your purchase, you can
            return unworn sneakers within 30 days for a full refund or exchange. Please refer to our Returns & Exchanges
            page for more details.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Q: How can I track my order?</div>
        <div className="collapse-content">
          <p>
            A: Once your order is shipped, you will receive a shipping confirmation email with a tracking number. You
            can use this tracking number to monitor the status of your delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;

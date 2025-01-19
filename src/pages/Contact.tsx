import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-2xl">
        <p className="mb-6">
          Get in touch with us for any inquiries about our services or to schedule a consultation.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p>Email: info@glintmaldives.com</p>
            <p>Phone: +960 XXX XXXX</p>
            <p>Address: Male', Maldives</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

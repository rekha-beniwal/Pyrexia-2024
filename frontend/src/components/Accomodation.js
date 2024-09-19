import React from 'react';

const Accomodation = () => {
    const contacts = {
        boys: [
            { name: "Sunil Meena", phone: "9358677455" },
            { name: "Sanjay Kumawat", phone: "87408 31837" },
            { name: "Tushar Kamboj", phone: "9518256360" }
        ],
        girls: [
            { name: "Khushi Beniwal", phone: "81689 01185" },
            { name: "Samiksha Pradhan", phone: "72059 95802" }
        ]
    };

    return (
        <div className="bg-[#001f3f] min-h-screen">
            {/* Header Section */}
            <div className="relative pt-28 pb-16 flex items-center justify-center">
                <h1 className="text-[#ebe6d0] text-center text-4xl font-semibold leading-[3.5rem] z-10 md:text-5xl md:px-12 md:leading-[2.5rem]">
                    Accomodation
                </h1>
            </div>

            {/* Content Section */}
            <div className="pb-20 flex relative items-center justify-center text-white">
                <div className="backdrop-blur-sm rounded-xl m-auto p-6 lg:px-10">
                    <div className="px-4 md:px-10 lg:px-10 text-lg font-light text-justify max-w-4xl border pt-10 pb-10">
                        <p className="mb-4">Clean and comfortable accommodation options are available.</p>
                        <p className="mb-4">Our accommodation facilities provide basic amenities like clean linen, washrooms, and 24-hour water supply.</p>
                        <p className="mb-4">For dormitories, contact the aforementioned coordinators.</p>
                        <p className="mb-4">Teams are preferred over individuals for dormitories.</p>
                        <p className="mb-4">Rooms and dormitories will be given on a first-come, first-served basis.</p>
                        <p className="mb-4">Limited rooms available, so register fast!</p>
                        <p className="mb-8">Our team will assist with any accommodation-related queries or concerns.</p>

                        {/* Contacts Section */}
                        <div>
                            <p className="mb-4">Pyrexia Accommodation Contact Numbers</p>

                            {/* Boys Section */}
                            <h3 className="text-xl font-semibold mb-4">Boys</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {contacts.boys.map((contact, index) => (
                                    <div key={index} className="bg-[#1e3a66] p-4 rounded-md shadow-lg">
                                        <h4 className="text-lg font-semibold">{contact.name}</h4>
                                        <p>{contact.phone}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Girls Section */}
                            <h3 className="text-xl font-semibold mt-8 mb-4">Girls</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {contacts.girls.map((contact, index) => (
                                    <div key={index} className="bg-[#1e3a66] p-4 rounded-md shadow-lg">
                                        <h4 className="text-lg font-semibold">{contact.name}</h4>
                                        <p>{contact.phone}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <a href="https://drive.google.com/file/d/1eMpZm87bgBAH5fpIkvku8Js59yh8eocw/view?usp=drive_link" className="text-[#ebe6d0] underline">Accommodation Booklet</a>
                        </div>
                        
                        {/* Buttons */}
                        <div className="flex gap-4 mt-4">
                            <button
                                className="bg-[#ebe6d0] hover:bg-gradient-to-t from-blue-500 to-white text-black px-6 py-2.5 rounded-lg font-bold text-sm border border-black hover:bg-[#d9d2b8] transition duration-300"
                                onClick={() => window.location.href = "https://forms.gle/M8PLyjZ1xZZUByaa8"}
                            >
                                Accomodation Girls
                            </button>
                            <button
                                className="bg-[#ebe6d0] hover:bg-gradient-to-t from-blue-500 to-white text-black px-6 py-2.5 rounded-lg font-bold text-sm border border-black hover:bg-[#d9d2b8] transition duration-300"
                                onClick={() => window.location.href = "https://forms.gle/zyDXze61Uf3ZTXH19"}
                            >
                                Accomodation Boys
                            </button>
                        </div>

                        {/* Decorative Dots */}
                       
                    </div>
                    <div className="flex items-center justify-center gap-3 pt-16 pb-16">
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="h-3 w-3 bg-[#ebe6d0] rotate-45"></div>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Accomodation;

import Image from 'next/image'

export function Hero() {
    return (
        <div className="bg-white min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-4/6 lg:pr-12">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Your AI-Powered <br /> <span className="text-blue-600">Chatbot</span> Solution
                        </h1>
                        <p className="text-xl font-normal text-gray-600 mb-8">
                            Enhance your customer experience with our intelligent chatbot. Powered by cutting-edge AI technology to provide instant, accurate responses.
                        </p>

                        <ul className="text-xl text-gray-600 mb-8 space-y-3">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span><strong>Always Available:</strong> Our AI never sleeps, providing round-the-clock support whenever you need it.</span>
                            </li>

                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span><strong>Effortless Interaction:</strong> Simply type your question, and our AI will understand and respond in natural language.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span><strong>Continuous Improvement:</strong> Our AI learns from each interaction, constantly refining its responses to serve you better.</span>
                            </li>
                        </ul>
                        <a href="tel:0452296866" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out inline-block">
                            Call us for demo!
                        </a>
                    </div>
                    <div className="lg:w-2/6 mt-12 lg:mt-0">
                        <Image
                            src="/images/chat.png"
                            alt="AI Chatbot"
                            width={600}
                            height={300}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

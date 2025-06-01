
function Hero() {
    return (
        <header>
            <nav className=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className=" flex lg:flex-1">
                    <a className="-m-1.5 p-1.5">

                        <span className="sr-only">
                            company name
                        </span>

                    </a>
                </div>
            </nav>
            <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-br from-blue-100 to-white">
                <h1 className="text-5xl font-extrabold mb-4">Welcome to After Hackathon</h1>
                <p className="text-lg text-gray-700 max-w-xl">
                    Sharing insights, lessons, and stories from post-hackathon life. Dive into our blog and discover what's next.
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                    Read the Blog
                </button>
            </section>
        </header>
    );
}

export default Hero;

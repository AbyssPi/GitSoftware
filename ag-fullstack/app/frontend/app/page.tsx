import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Categories />
        </main>
    );
}

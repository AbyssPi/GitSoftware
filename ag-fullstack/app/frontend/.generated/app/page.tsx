import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../../components/Categories';
import { client } from '../sanity/client';
import { getCategoriesQuery } from '../sanity/queries';
import type { SanityCategory } from '../shared/types/sanity';

export default async function Home() {
    const categories: SanityCategory[] = await client.fetch(getCategoriesQuery);

    return (
        <main className="min-h-screen bg-white">
            <Navbar categories={categories} />
            <Hero />
            <Categories categories={categories} />
        </main>
    );
}

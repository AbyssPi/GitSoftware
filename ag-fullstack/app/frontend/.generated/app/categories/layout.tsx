import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { client } from '../../sanity/client';
import { getCategoriesQuery } from '../../sanity/queries';
import type { SanityCategory } from '../../shared/types/sanity';

export default async function CategoriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const categories: SanityCategory[] = await client.fetch(getCategoriesQuery);

    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="minimal" categories={categories} />
            <div className="flex flex-col md:flex-row">
                <Sidebar categories={categories} />
                <main className="flex-1 w-full">{children}</main>
            </div>
        </div>
    );
}

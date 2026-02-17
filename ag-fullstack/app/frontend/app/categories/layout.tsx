import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

export default function CategoriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="minimal" />
            <div className="flex flex-col md:flex-row">
                <Sidebar />
                <main className="flex-1 w-full">{children}</main>
            </div>
        </div>
    );
}

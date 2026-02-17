export const metadata = {
    title: "Content Studio",
    description: "Sanity CMS content management studio",
};

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ margin: 0, height: "100vh" }}>{children}</div>
    );
}

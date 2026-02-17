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
        <html lang="en">
            <body style={{ margin: 0 }}>{children}</body>
        </html>
    );
}

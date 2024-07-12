import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="border border-red-800">
            <Sidebar />
            <div className="main-content border border-yellow-800">
                <Navbar />
                {children}
            </div>
        </main>
    )
}

export default Layout;
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                {children}
            </div>
        </main>
    )
}

export default Layout;
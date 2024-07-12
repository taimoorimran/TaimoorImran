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
            {/* 
            <div className="p-48 border border-red-200 w-[800px]">
                {children}
            </div> */}
        </main>
    )
}

export default Layout;
import { Toaster } from 'react-hot-toast';

export default function ToasterProvider() {
    return (
        <Toaster
            position={"bottom-left"}
            toastOptions={{
                duration: 5000,
                className: "text-md",
                style: {
                    background: "#F4F4F5",
                    color: "#000000",
                    minWidth: '200px',
                    boxShadow: 'none',
                },
                success: {
                    // theme: {
                    //     primary: "green",
                    //     secondary: "black"
                    // },
                },
            }}
        />
    )
}

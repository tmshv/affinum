import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export type ClientOnlyProps = {
    children: ReactNode
}
const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
    let [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return mounted ? <>{children}</> : null;
}

export default ClientOnly


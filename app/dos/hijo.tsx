import type { ReactNode } from 'react';

type HijoProps = {
    children: ReactNode;
};

export default function Hijo({ children }: HijoProps) {
    return (
        <div>
            este no  es mi hijo {children}
        </div>
    );
}
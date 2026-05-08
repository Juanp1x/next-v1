"use cliente";
import Props from "./uno/props";
import { useAppContext } from "./Contexto/AppContext";
export default function Home() {
  const { nombre } = useAppContext();
  return (
    <div>
      <Props nombre="xd" />
    </div>
  );
}

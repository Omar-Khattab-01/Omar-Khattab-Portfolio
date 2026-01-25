import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Bootstraps the React application and mounts it to the root element.
createRoot(document.getElementById("root")!).render(<App />);

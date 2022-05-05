import { createContext } from "react";

const ThemeContext = createContext<[string, (theme: string) => void]>(["#fff", () => {}]);

export default ThemeContext;

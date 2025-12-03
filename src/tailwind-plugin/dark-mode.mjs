// Dark mode plugin for Tailwind v4
export default function darkModePlugin({ addVariant }) {
  addVariant("dark", "&.dark");
  addVariant("dark", ".dark &");
}

import Header from "./Header";

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}
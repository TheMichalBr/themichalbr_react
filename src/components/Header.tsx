import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="sticky top-0 z-[20] bg-dark-background mx-auto flex w-full flex-wrap items-center justify-between border-b border-gray-500 p-8">
        <Logo />
        <h1 className="text-2xl font-bold">MichalBr</h1>
        <Nav />
        </header>
    );
}

export default Header;
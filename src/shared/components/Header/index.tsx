const Header = () => {
  return (
    <header className="flex w-full p-[1.5rem] shadow-md">
      <h2
        data-testid="title"
        className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
      >
        On GPS
      </h2>
    </header>
  );
};

export default Header;

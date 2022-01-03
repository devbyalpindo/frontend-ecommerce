const Main = ({ children }) => {
  return (
    <div className='flex flex-col flex-1 w-full'>
      <main className='h-full overflow-y-auto'>{children}</main>
    </div>
  );
};

export default Main;

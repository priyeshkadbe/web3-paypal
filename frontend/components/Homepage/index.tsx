type PageProp = {
  children: JSX.Element | JSX.Element[];
};

function Homepage({ children }: PageProp) {
  
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center p-4 md:p-6">
        {children}
      </div>
    </div>
  );
}

export default Homepage;

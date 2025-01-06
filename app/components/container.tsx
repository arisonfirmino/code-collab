const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full justify-center">
      <div className="w-full max-w-xl">{children}</div>
    </main>
  );
};

export default Container;

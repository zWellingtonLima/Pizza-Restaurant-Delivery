interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="mx-auto w-full px-4 max-w-7xl">{children}</div>;
};

export default Container;

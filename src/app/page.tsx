export default function Home() {
  const getDivs = (n: number) => {
    return (
      <div className="flex flex-col gap-2">
        {Array.from({ length: n }, (_, i) => (
          <div className="h-10 w-full border-b" key={i}>
            Div {i + 1}
          </div>
        ))}
      </div>
    );
  };

  return <div>{getDivs(200)}</div>;
}

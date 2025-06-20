type Props = {
  text: string;
};

export const HighlightedText = ({ text }: Props) => {
  if (!text) {
    return null;
  }
  const parts = text.split(/<\/?em>/);
  return (
    <>
      {parts.map((part, index) => {
        const isEmphasized = index % 2 === 1;
        if (isEmphasized) {
          return (
            <span key={index} className="bg-yellow-300 italic rounded-md px-1">
              {part}
            </span>
          );
        } else {
          return <span key={index}>{part}</span>;
        }
      })}
    </>
  );
};

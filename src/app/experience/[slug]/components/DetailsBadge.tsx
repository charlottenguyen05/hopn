const DetailsBadge = ({ content }: { content: string | number }) => {
  return (
    <div
      className={`absolute top-6 ${
        typeof content == "string" ? "left-6" : "right-6"
      }`}
    >
      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-indigo-600 rounded-full text-sm font-semibold">
        {(typeof content === 'string') ? content : `${content}€`}
      </span>
    </div>
  );
};

export default DetailsBadge;

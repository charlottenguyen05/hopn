const ExperienceDescription = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-700 leading-relaxed text-lg">{content}</p>
    </div>
  );
};

export default ExperienceDescription;

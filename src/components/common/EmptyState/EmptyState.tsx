
interface EmptyStateProps {
  title: string;
  description?: string;
}

export const EmptyState = ({
  title,
  description,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      {description && (
        <p className="text-gray-600 text-center max-w-md">{description}</p>
      )}
    </div>
  );
};
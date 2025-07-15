export function Button({ children, className = '', asChild = false }) {
  const Tag = asChild ? 'span' : 'button';
  return (
    <Tag
      className={`px-4 py-2 rounded bg-black text-white hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors ${className}`}
    >
      {children}
    </Tag>
  );
}

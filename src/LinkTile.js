function LinkTile(link, title) {
  return (
    <a
      className="flex items-center justify-center text-center rounded-md border shadow-lg overflow-hidden h-24 bg-green-500"
      href="{link}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="p-4">
        <div class="text-md">{title}</div>
      </div>
    </a>
  );
}

export default LinkTile;

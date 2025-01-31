export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <p className="text-sm text-gray-500">
          © 2024 Smart UI. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a
            href="/terms"
            className="text-sm text-gray-500 hover:text-[#8B3DFF]"
          >
            Terms
          </a>
          <a
            href="privacity"
            className="text-sm text-gray-500 hover:text-[#8B3DFF]"
          >
            Privacity
          </a>
        </div>
      </div>
    </footer>
  );
}

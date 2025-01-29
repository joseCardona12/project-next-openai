export function Footer() {
    return (
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <p className="text-sm text-gray-500">© 2024 Smart UI. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-[#8B3DFF]">
              Términos
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#8B3DFF]">
              Privacidad
            </a>
          </div>
        </div>
      </footer>
    )
  }
  
  
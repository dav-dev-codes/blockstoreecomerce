import Link from 'next/link';

function Navbar() {
    return(
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-amber-400 text-gray-50">
        <Link href="/" className="flex items-center space-x-2">
          {/* Bolinhas coloridas */}
          <div className="flex space-x-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
      
          {/* Texto estilizado */}
          <span className="text-md uppercase font-bold">
            <span className="text-white">BLOCO</span>
            <span className="text-pink-600">STORE</span>
          </span>
        </Link>
      </nav>
    )
}

export default Navbar;
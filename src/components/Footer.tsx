export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">SIP</h3>
          <p className="text-gray-400 text-sm">&quot;One for Living, Enjoy Your Taste.&quot;</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 tracking-wide text-gray-200">Shop</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">Watermelon Juice</a></li>
            <li><a href="#" className="hover:text-white transition-colors">New Products</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 tracking-wide text-gray-200">Support</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 tracking-wide text-gray-200">Newsletter</h4>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-gray-800 text-white px-4 py-3 rounded-l-lg w-full outline-none focus:ring-1 focus:ring-pink-500"
            />
            <button type="submit" className="bg-gradient-to-r from-red-500 to-pink-500 px-6 py-3 rounded-r-lg font-semibold hover:opacity-90 transition-opacity">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} SIP Juice. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

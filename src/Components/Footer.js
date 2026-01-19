export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        <div>
          <h1 className="text-2xl font-extrabold text-orange-500">Swiggy</h1>
          <p className="mt-3 text-sm text-gray-500">
            © 2025 Swiggy Limited
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Instamart</li>
            <li>Dineout</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Contact us</h3>
          <ul className="space-y-2 text-sm">
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>

          <h3 className="font-bold mt-6 mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Available in:</h3>
          <ul className="space-y-2 text-sm">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>

          <select className="mt-4 w-full border rounded-md px-3 py-2 text-sm bg-gray-100">
            <option>685 cities</option>
          </select>
        </div>

        <div>
          <h3 className="font-bold mb-4">Life at Swiggy</h3>
          <ul className="space-y-2 text-sm">
            <li>Explore With Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>

          <h3 className="font-bold mt-6 mb-3">Social Links</h3>
          <div className="flex gap-4 text-lg">
            <i className="ri-linkedin-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-facebook-fill"></i>
            <i className="ri-pinterest-fill"></i>
            <i className="ri-twitter-x-line"></i>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300"></div>

      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-lg font-semibold text-gray-700">
          For better experience, download the Swiggy app now
        </p>

        <div className="flex gap-4">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-12" />
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" className="h-12" />
        </div>
      </div>
    </footer>
  );
}

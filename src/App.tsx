import {
  Smartphone,
  ShoppingBag,
  Bell,
  LayoutGrid,
  Zap,
  MoveRight,
  ArrowLeft,
  Heart,
  Star,
  Dot,
  CheckCheck,
  Youtube,
  Facebook,
  Expand,
  Trash,
  Minus,
  Plus,
  X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Lenis from "lenis";

import "./App.css";
import { images } from "./assets/constants/media";
import {
  bestStores,
  categories,
  flashSaleListings,
} from "./assets/constants/variable";

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 8,
    seconds: 8,
  });
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [sidebarActiveText, setSidebarActiveText] = useState("Notifications");

  const salesRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarActive((prev) => !prev);
  };

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  // Initialize horizontal Lenis for sales section
  useEffect(() => {
    if (!salesRef.current) return;

    const horizontalLenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Set the target element for horizontal scrolling
    horizontalLenis.scrollTo(salesRef.current, {
      offset: 0,
      immediate: true,
    });

    const raf = (time: number) => {
      horizontalLenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      horizontalLenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 8;
              minutes = 8;
              seconds = 8;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <main className="relative font-helvetica">
      {/* overlay */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black cursor-pointer opacity-50 z-30 ${
          isSidebarActive ? "" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-4/5 h-full bg-white shadow-lg z-40 transition-transform transform md:w-2/5 ${
          isSidebarActive ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-3 md:p-6">
          {sidebarActiveText === "Notifications" && (
            <div className="notifications font-helvetica">
              <div className="heading flex justify-between gap-x-4 items-center pb-4 border-b border-gray-300">
                <h2 className="grow text-lg font-helvetica-bold lg:text-2xl">
                  Notifications
                </h2>
                <button className="flex flex-row items-center gap-2 text-gray-500 text-sm">
                  <span>Mark all as read</span>
                  <CheckCheck />
                </button>
                <button className="bg-gray-100 p-2 rounded-md">
                  <Expand size={18} />
                </button>
              </div>
              <h3 className="text-gray-500 text-sm mt-4">Today</h3>
              <div className="not mt-2">
                <p className="">
                  Your request item{" "}
                  <span className="font-helvetica-medium">
                    "50cl Shampoo is now available"
                  </span>{" "}
                  Navigate to cart to checkout.
                </p>
                <span className="text-gray-500 text-sm">2 hours ago</span>
              </div>
            </div>
          )}
          {sidebarActiveText === "Cart" && (
            <div className="cart font-helvetica">
              <div className="heading flex justify-between gap-x-4 items-center pb-4 border-b border-gray-300">
                <h2 className="grow text-2xl font-helvetica-bold">Cart</h2>
                <button className="flex flex-row items-center gap-2 text-gray-500 text-sm">
                  <span>Clear cart</span>
                  <Trash size={18} />
                </button>
                <button className="bg-gray-100 p-2 rounded-md">
                  <Expand size={18} />
                </button>
              </div>

              <div className="items mt-4">
                <div className="item flex gap-x-4 flex-row items-center ">
                  <img
                    src={images.hat}
                    alt="black optizoon camera shoulder bag"
                    className="w-32 bg-gray-300 rounded-md"
                  />
                  <div className="info grow flex flex-col gap-y-1">
                    <h3>OptiZooom Camera Shoulder Bag</h3>
                    <span className="font-helvetica-medium text-lg">
                      Rp250.0
                    </span>
                    <div className="actions flex flex-row justify-between items-center gap-x-4 mt-2">
                      <p className="flex flex-row gap-4 items-center border border-gray-200 rounded-xl p-2">
                        <button>
                          <Minus size={18} />
                        </button>
                        <span className="text-sm">01</span>
                        <button>
                          <Plus size={18} />
                        </button>
                      </p>
                      <button className="flex flex-row gap-x-2 text-sm bg-gray-100 rounded-sm px-2 py-1 items-center">
                        <span className="hidden md:flex">remove</span>
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>
      {/* Top Navigation */}
      <nav className="fixed w-full top-0 left-0 bg-white z-20">
        <div className="border-b border-gray-300 flex flex-col justify-between gap-y-3 text-gray-500 text-sm py-2 px-6 md:flex-row md:items-center">
          <button className="flex flex-row items-center gap-2 mx-auto lg:m-0">
            <Smartphone />
            <span>Download BeliBeli App</span>
          </button>
          <ul className="flex flex-row flex-wrap items-center gap-x-6 gap-y-2 md:ml-auto">
            <li>Mitra BeliBeli</li>
            <li>About BeliBeli</li>
            <li>BeliBeli Core</li>
            <li>Promo</li>
            <li className="font-helvetica-medium text-black">Sign Up</li>
            <li className="font-helvetica-medium text-black">Login</li>
          </ul>
        </div>
        {/* End of Top Navigation */}
        <div className="flex flex-row items-center justify-between gap-x-8 px-6 py-2 border-b border-gray-300">
          <a href="#" className="flex flex-row gap-2 items-center">
            <img src={images.Logo} alt="Logo of BeliBeli" className="w-10" />
            <span className="font-helvetica-bold text-2xl">BeliBeli.com</span>
          </a>
          {/* search bar */}
          <div className="hidden grow border border-gray-300 rounded-md  flex-row items-center text-gray-500 divide-x-2 divide-gray-300 md:flex">
            <select name="category" id="category" className="py-2 px-4 text-sm">
              <option value="">All Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.text.toLocaleLowerCase()}>
                  {cat.text}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search product or brand here..."
              className="grow py-2 px-4 text-sm placeholder:text-gray-500"
            />
          </div>
          {/* End of search bar */}
          {/* actions */}
          <div className="flex flex-row items-center gap-8 md:gap-4">
            <ShoppingBag
              onClick={() => {
                toggleSidebar();
                setSidebarActiveText("Cart");
              }}
            />
            <Bell
              onClick={() => {
                toggleSidebar();
                setSidebarActiveText("Notifications");
              }}
            />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="pt-18">
        <div className="flex flex-col gap-y-4 py-18 px-6">
          <span className="text-gray-500 font-helvetica-medium">
            #Big Fashion Sale
          </span>
          <h1 className="text-4xl font-helvetica-bold md:text-7xl md:w-1/2">
            Limited Time offer! Up to <span className="italic">50%</span> OFF!
          </h1>
          <p className="text-gray-500 font-helvetica-medium">
            Redefine Your Everyday Style
          </p>
        </div>
      </section>
      {/* Categories */}
      <section>
        <div className="grid grid-cols-3 gap-y-6 gap-x-18 py-10 px-8 text-center md:grid-cols-6 lg:grid-cols-9 md:px-12 md:py-16">
          {categories.map((cat) => (
            <div key={cat.id} className="category-container">
              <div className="img-containers bg-gray-300 rounded-full overflow-clip">
                <img src={cat.image} alt={cat.alt} className="w-18 h-18 " />
              </div>
              <h2>{cat.text}</h2>
            </div>
          ))}

          <div className="category-container">
            <div className="img-containers p-5 bg-white rounded-full border border-gray-300 overflow-clip">
              <LayoutGrid
                className="w-full h-auto m-auto"
                fill="#d1d5dc"
                stroke="#d1d5dc"
              />
            </div>
            <h2>All Categories</h2>
          </div>
        </div>
      </section>

      {/* Flash Sales */}
      <section>
        <div className="py-16 px-8 bg-grey-1 md:px-12">
          <div className="heading flex flex-row flex-wrap items-center gap-4">
            <h2 className="w-full flex gap-x-4 items-center text-2xl font-helvetica-bold md:w-auto md:text-3xl lg:text-4xl">
              <Zap
                size={44}
                fill="white"
                className="p-2 bg-black border border-gray-300 rounded-full"
              />
              <span>Flash Sale</span>
            </h2>
            <p className="timer flex items-center flex-row gap-x-2">
              <span className="ticker">{formatTime(timeLeft.hours)}</span>
              <span>:</span>
              <span className="ticker">{formatTime(timeLeft.minutes)}</span>
              <span>:</span>
              <span className="ticker">{formatTime(timeLeft.seconds)}</span>
            </p>
            <div className="nav flex flex-row gap-x-4 ml-auto">
              <button className="bg-white border border-black rounded-md p-1">
                <ArrowLeft />
              </button>
              <button className="bg-black text-white border border-black rounded-md p-1">
                <MoveRight />
              </button>
            </div>
          </div>
          <div
            className="sales flex gap-x-8 mt-12 overflow-x-scroll"
            ref={salesRef}
          >
            {flashSaleListings.map((listing) => (
              <div key={listing.id} className="item-container">
                <div className="sales-img bg-gray-300 grow flex">
                  <div className="wishlist absolute right-0 top-0">
                    <button className="bg-white p-2 rounded-full m-2">
                      <Heart
                        width={21}
                        height={21}
                        fill="#d1d5dc"
                        stroke="#d1d5dc"
                        className="hover:fill-red-500 hover:stroke-red-500 transition-all duration-300 cursor-pointer"
                      />
                    </button>
                  </div>
                  <img
                    src={listing.image}
                    alt="Eliteshield black leather performance jacket for men"
                    className="w-full m-auto"
                  />
                </div>
                <div className="sales-info">
                  <h2 className="item-title">{listing.listing_title}</h2>
                  <p>
                    <span className="item-price">Rpp{listing.price}</span>
                  </p>
                </div>
                <div className="sales-amount">
                  <div className="sales-total bg-gray-300 grow h-4 rounded-full overflow-hidden;">
                    <div
                      className="sales-progress h-full bg-black rounded-full"
                      style={{
                        width: `${(listing.left / listing.total) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="font-poppins text-sm">
                    {listing.left}/{listing.total} Sale
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today for you */}
      <section>
        <div className="py-16 px-8 bg-white md:px-12">
          <div className="heading flex flex-row flex-wrap items-center gap-4">
            <h2 className="text-2xl font-helvetica-bold md:text-3xl lg:text-4xl">
              Today For You!
            </h2>
            <div className="filter flex flex-row gap-x-4 text-sm lg:ml-auto">
              <button className="filter-btn bg-black text-white">
                Best Seller
              </button>
              <button className="filter-btn border border-gray-300">
                Keep Stylish
              </button>
              <button className="filter-btn border border-gray-300">
                Special Discount
              </button>
            </div>
          </div>
          <div className="sales grid gap-8 mt-12 pb-2 overflow-x-scroll md:grid-cols-2 lg:grid-cols-4">
            {flashSaleListings.map((listing) => (
              <div
                key={listing.id}
                className="shadow-lg rounded-xl overflow-clip"
              >
                <div className="sales-img bg-gray-300 grow flex">
                  <div className="wishlist absolute right-0 top-0">
                    <button className="bg-white p-2 rounded-full m-2">
                      <Heart
                        width={21}
                        height={21}
                        fill="#d1d5dc"
                        stroke="#d1d5dc"
                        className="hover:fill-red-500 hover:stroke-red-500 transition-all duration-300 cursor-pointer"
                      />
                    </button>
                  </div>
                  <img
                    src={listing.image}
                    alt="Eliteshield black leather performance jacket for men"
                    className="w-full m-auto"
                  />
                </div>
                <div className="sales-info">
                  <h2 className="item-title">{listing.listing_title}</h2>
                  <div className="rating-and-sold flex items-center gap-x-1 mt-1 text-sm">
                    <Star color="#fff" fill="#ff9b09" />
                    <span className="rating font-poppins-bold">4.9</span>
                    <Dot fill="#000000" />
                    <span className="text-gray-500">10k+ Sold</span>
                  </div>
                  <p className="mt-2">
                    <span className="item-price">Rpp{listing.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Store */}
      <section>
        <div className="py-16 px-8 bg-white md:px-12">
          <h2 className="text-3xl font-helvetica-bold text-center lg:text-4xl">
            Best Selling Store
          </h2>
          <div className="store grid lg:grid-cols-3 gap-8 grid-4 mt-12">
            <div className="row-span-2 bg-gray-300 rounded-2xl text-center overflow-clip">
              <img
                src={images.holding_bags}
                alt="female hands holding up a black paper shopping bag"
              />
              <div className="store-info flex items-center flex-col gap-y-2 mt-4 pb-4">
                <h2 className="text-3xl text-gray-500 font-poppins-bold">
                  BeliBeli Mall
                </h2>
                <p className="w-4/5 text-gray-500 text-lg">
                  Shop, Expore, Delight and Experience Mall Magic!
                </p>
              </div>
            </div>

            {bestStores.map((store) => (
              <div
                key={store.id}
                className="border border-gray-300 rounded-2xl overflow-clip p-3"
              >
                <h2 className="font-poppins-bold text-lg">{store.name}</h2>
                <p className="text-gray-500">"{store.tagline}"</p>
                <div className="catalogue grid grid-cols-3 gap-x-3 mt-4">
                  {store.images.map((image) => (
                    <div
                      key={image.id}
                      className="flex bg-gray-300 rounded-xl overflow-clip h-32 w-full"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover h-full w-full"
                      />
                    </div>
                  ))}
                </div>

                <div className="catalogue-prices grid grid-cols-3 gap-x-3 text-center mt-2 font-poppins-bold text-sm">
                  <span>Rp650.00</span>
                  <span>Rp270.00</span>
                  <span>Rp99.00</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Line Section */}
      <section>
        <div id="img-bg" className="relative px-8 py-16 bg-white md:p-32">
          <div className="absolute bg-gray-500 opacity-60 top-0 left-0 w-full h-full"></div>
          <h2 className="relative text-2xl italic font-helvetica-bold text-center text-white md:text-5xl z-10">
            "Let's Shop Beyond Boundaries"
          </h2>
        </div>
      </section>

      <footer className="bg-blackCustom text-white">
        <div className="grid gap-x-8 gap-y-8 font-poppins p-8 lg:p-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-y-2">
            <a href="#" className="flex flex-row gap-2 items-center">
              <img
                src={images.Logo}
                alt="Logo of BeliBeli"
                className="w-10 invert"
              />
              <span className="font-helvetica-medium text-2xl">
                BeliBeli.com
              </span>
            </a>
            <p>Let's Shop Beyond Boundaries</p>
            <p className="flex gap-x-3 mt-8 lg:mt-auto">
              <Facebook />
              <Youtube />
            </p>
          </div>

          <div>
            <h2 className="font-helvetica-bold text-gray-400">BeliBeli</h2>
            <ul className="flex flex-col gap-y-2 mt-3 text-sm">
              <li>About BeliBeli</li>
              <li>Career</li>
              <li>Mitra Blog</li>
              <li>B2B Digital</li>
            </ul>
          </div>

          <div>
            <h2 className="font-helvetica-bold text-gray-400">Buy</h2>
            <ul className="flex flex-col gap-y-2 mt-3 text-sm">
              <li>Bill & Top Up</li>
              <li>BeliBeli COD</li>
              <li>Mitra Blog</li>
              <li>Promo</li>
            </ul>
          </div>

          <div>
            <h2 className="font-helvetica-bold text-gray-400">Sell</h2>
            <ul className="flex flex-col gap-y-2 mt-3 text-sm">
              <li>Seller Education Center</li>
              <li>Brand Index</li>
              <li>Register Official Store</li>
            </ul>
          </div>

          <div>
            <h2 className="font-helvetica-bold text-gray-400">
              Guide and Help
            </h2>
            <ul className="flex flex-col gap-y-2 mt-3 text-sm">
              <li>BeliBeli Core</li>
              <li>Terms and Conditions</li>
              <li>Privacy</li>
              <li>Mitra</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-500 text-gray-400 text-center py-2 font-helvetica">
          &copy; 2001 - 2025, BeliBeli.com. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

export default App;

'use client'
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link href="/">
              <Image src="/assets/images/first-aid-mc.png" alt="first-aid-mc-logo" width={70} height={50} />
            </Link>
            

          </div>

          <div className="nav-wrapper">
            <div className="navigation">
              <ul className="nav-list">
                <li className="nav-list-item">
                  <Link href="/about-us">About Us</Link>
                </li>

                <li className="nav-list-item">
                  <Link href="/our-courses">Our Courses</Link>
                  <span className="sub-nav-toggler">
                    <i className="bi bi-caret-down-fill"></i>
                  </span>
                  <ul className="sub-nav-list">
                    <li className="sub-nav-list-item"><a href="#">item 1</a></li>
                    <li className="sub-nav-list-item"><a href="#">item 2</a></li>
                    <li className="sub-nav-list-item"><a href="#">item 3</a></li>
                  </ul>
                </li>

                <li className="nav-list-item">
                  <Link href="/upcoming-courses">Upcoming Course</Link>
                  <span className="sub-nav-toggler">
                    <i className="bi bi-caret-down-fill"></i>
                  </span>
                  <ul className="sub-nav-list">
                    <li className="sub-nav-list-item"><a href="#">item 1</a></li>
                    <li className="sub-nav-list-item"><a href="#">item 2</a></li>
                    <li className="sub-nav-list-item"><a href="#">item 3</a></li>
                  </ul>
                </li>

                <li className="nav-list-item">
                  <Link href="/faq">FAQ</Link>
                </li>
                <li className="nav-list-item">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>

              <div className="header-cta">
                <Link href="/login" className="login-btn">Login</Link>
                <span>Or</span>
                <Link href="/subscribe" className="subscribe-btn">Subscribe</Link>
              </div>
            </div>
          </div>

          <div className="mobile-toggler">
            <button className="mobile-toggler-btn">
              <i className="bi bi-list bars"></i>
              <i className="bi bi-x cross"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

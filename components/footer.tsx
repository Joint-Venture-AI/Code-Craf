import Link from "next/link";
import { Brain, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className='bg-gray-50 border-t border-gray-100'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md flex items-center justify-center'>
                <Brain className='h-5 w-5 text-white' />
              </div>
              <span className='font-bold text-xl'>CodeCraf</span>
            </div>
            <p className='text-gray-600 mb-4'>
              Level 2 Fiverr seller providing premium AI development services
              with 100% client satisfaction.
            </p>
            {/* <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-600 transition-colors'
              >
                <Twitter className='h-5 w-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-600 transition-colors'
              >
                <Linkedin className='h-5 w-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-600 transition-colors'
              >
                <Github className='h-5 w-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-purple-600 transition-colors'
              >
                <Instagram className='h-5 w-5' />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-bold text-gray-900 mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#'
                  className='text-gray-600 hover:text-purple-600 transition-colors'
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href='#services'
                  className='text-gray-600 hover:text-purple-600 transition-colors'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='#portfolio'
                  className='text-gray-600 hover:text-purple-600 transition-colors'
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href='#about'
                  className='text-gray-600 hover:text-purple-600 transition-colors'
                >
                  Teams
                </Link>
              </li>
            
              <li>
                <Link
                  href='#contact'
                  className='text-gray-600 hover:text-purple-600 transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='font-bold text-gray-900 mb-4'>My Services</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                href='#'
                  className='text-gray-600 hover:text-purple-600 transition-colors'
                >
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link
                   href='#'
                  className='text-gray-600 hover:text-purple-600 transition-colors'
                >
                  GPT Integration
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-gray-600 hover:text-purple-600 transition-colors'
                >
                  AI-Powered Analytics
                </Link>
              </li>
              <li>
                <Link
                   href='#'
                  className='text-gray-600 hover:text-purple-600 transition-colors'
                >
                  Computer Vision
                </Link>
              </li>
              <li>
                <Link
                   href='#'
                  className='text-gray-600 hover:text-purple-600 transition-colors'
                >
                  Custom AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Fiverr Profile */}
          <div>
            <h3 className='font-bold text-gray-900 mb-4'>Fiverr Profile</h3>
            <ul className='space-y-2'>
              <li className='text-gray-600'>Level 2 Seller</li>
              <li className='text-gray-600'>5.0 Rating (200+ Reviews)</li>
              <li className='text-gray-600'>Fast Delivery</li>
              <li className='text-gray-600'>100% Satisfaction Guarantee</li>
              <li>
                <a
                  href='https://www.fiverr.com/code_craf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#1dbf73] hover:text-[#19a463] font-medium transition-colors'
                >
                  Visit My Fiverr Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-600 text-sm'>
            © {new Date().getFullYear()} CodeCraf. All rights reserved.
          </p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <Link
              href='#'
              className='text-gray-600 hover:text-purple-600 transition-colors text-sm'
            >
              Privacy Policy
            </Link>
            <Link
              href='#'
              className='text-gray-600 hover:text-purple-600 transition-colors text-sm'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

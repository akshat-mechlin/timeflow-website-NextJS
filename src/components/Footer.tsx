import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-flow-border bg-flow-bg px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img src="/assets/icon.png" alt="" className="h-8 w-8 rounded-lg" width={32} height={32} />
              <span className="bg-flow-gradient bg-clip-text text-xl font-semibold text-transparent">Timeflow</span>
            </div>
            <p className="text-sm leading-relaxed">
              Time tracking, attendance, optional activity verification, and admin reporting—powered by Timeflow Tracker for
              Windows and macOS.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="transition-colors hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="transition-colors hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="transition-colors hover:text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <a href="#download" className="transition-colors hover:text-white">
                  Download app
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="transition-colors hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#docs" className="transition-colors hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#support" className="transition-colors hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#status" className="transition-colors hover:text-white">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-flow-border pt-8 md:flex-row">
          <div className="text-sm">&copy; {new Date().getFullYear()} Timeflow. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <a href="#linkedin" className="transition-colors hover:text-white" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#twitter" className="transition-colors hover:text-white" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#github" className="transition-colors hover:text-white" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#privacy" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#terms" className="transition-colors hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

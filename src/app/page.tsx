'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/src/components/ui/navigation-menu";
import Button from "@/src/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { navbarIntroAnimation } from "@/src/animations/navbarAnimations";
import { heroTextAnimation } from "@/src/animations/heroTextAnimations";
import { featureCardsAnimation } from "@/src/animations/cardAnimations";
import { counterAnimation } from "@/src/animations/counterAnimations";
import { pricingCardAnimation } from "@/src/animations/pricingCardAnimations";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "../components/ui/sheet";
import { Menu } from "lucide-react";
import { fadeInUp, fadeInRight } from "@/src/animations/animations";
import { motion } from "framer-motion";


const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Features', href: '/#features' },
  { name: 'Pricing', href: '/#pricing' },
];

const features = [
  {
    title: 'Automatic Time Tracking',
    description: 'Effortlessly track work hours with our intelligent time tracking that runs in the background.',
    imageSrc: '/activity.png',
    imageAlt: 'Automatic Time Tracking',
  },
  {
    title: 'Activity Monitoring',
    description: 'Get insights into app and website usage to understand how time is spent during work hours.',
    imageSrc: '/activity.png',
    imageAlt: 'Activity Monitoring',
  },
  {
    title: 'Optional Screenshots',
    description: 'Configure periodic screenshots with privacy controls to verify work without micromanaging.',
    imageSrc: '/activity.png',
    imageAlt: 'Optional Screenshots',
  },
  {
    title: 'Detailed Reports',
    description: 'Generate comprehensive reports on productivity, attendance, and project time allocation.',
    imageSrc: '/activity.png',
    imageAlt: 'Detailed Reports',
  },
  {
    title: 'Time Off Management',
    description: 'Streamline leave requests and approvals with an intuitive time off management system.',
    imageSrc: '/activity.png',
    imageAlt: 'Time Off Management',
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-level encryption and security protocols to protect your sensitive workforce data.',
    imageSrc: '/activity.png',
    imageAlt: 'Enterprise Security',
  },
];

const pricingPlans = [
  {
    title: 'Basic',
    price: '$5',
    period: '/month',
    features: [
      'Essential Time Tracking',
      'Basic Analytics',
      'Daily Goals',
    ],
  },
  {
    title: 'Pro',
    price: '$12',
    period: '/month',
    features: [
      'Everything in Basic',
      'Team Challenges',
      'Advanced Analytics',
    ],
  },
  {
    title: 'Premium',
    price: '$20',
    period: '/month',
    features: [
      'Everything in Pro',
      'Unlimited History',
      'Dedicated Support',
    ],
  },
];

export default function Home() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const totalHoursRef = useRef<HTMLSpanElement>(null);
  const teamMembersRef = useRef<HTMLSpanElement>(null);
  const billableHoursRef = useRef<HTMLSpanElement>(null);
const MotionImage = motion(Image);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useLayoutEffect(() => {
    if (!logoRef.current || !textRef.current || !menuRef.current || !buttonRef.current || !heroHeadingRef.current) return;

    const navTl = navbarIntroAnimation(
      logoRef.current,
      textRef.current,
      menuRef.current,
      buttonRef.current
    );

    // Run hero animation after navbar completes
    navTl.eventCallback("onComplete", () => {
      heroTextAnimation(heroHeadingRef.current!);
      setShowParagraph(true);
      setShowImage(true);
    });

    return () => {
      navTl.kill();
    };
  }, []);

  useEffect(() => {
    if (!cardsRef.current || cardsRef.current.length === 0) return;
  
    const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
  
    featureCardsAnimation(cards);
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (totalHoursRef.current) {
      counterAnimation(totalHoursRef.current, 87, 'h', 2);
    }
    if (teamMembersRef.current) {
      counterAnimation(teamMembersRef.current, 27, '', 2);
    }
    if (billableHoursRef.current) {
      counterAnimation(billableHoursRef.current, 127, 'h', 2);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    pricingCardAnimation();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <div className="bg-gradient-to-r from-[#111827] to-[#1F2937] overflow-x-hidden">
      <NavigationMenu className="flex items-center justify-between mx-auto mb-5 lg:mb-20 px-6 lg:px-20 py-6 lg:py-10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-6">
          <div ref={logoRef}>
            <Image src="/logo.png" alt="logo" width={50} height={50} />
          </div>

          <span ref={textRef} className="font-bold text-2xl text-white">
            TimeFlow
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenuList ref={menuRef} className="hidden md:flex gap-4">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;

            return (
              <NavigationMenuItem
                key={link.name}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-lg font-medium transition-colors hover:text-white ${isActive
                    ? "text-white underline underline-offset-8"
                    : "text-white"
                    }`}
                >
                  {link.name}
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button ref={buttonRef}>Contact Sales</Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#111827] border-purple-500/30 w-[300px] sm:w-[400px] p-4">
            <SheetHeader>
              <SheetTitle className="text-white text-2xl font-bold">Menu</SheetTitle>
            </SheetHeader>
            
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <SheetClose key={link.name} asChild>
                    <Link
                      href={link.href}
                      className={`px-4 py-3 text-lg font-medium transition-colors rounded-lg ${
                        isActive
                          ? "text-white bg-purple-500/20 border-l-4 border-purple-500"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>

            <div className="mt-8 pt-8 border-t border-white/20">
              <SheetClose asChild>
                <Button className="w-full">Contact Sales</Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </NavigationMenu>
      

      <div className="flex">
        <div className="flex w-full lg:flex-row flex-col items-center justify-between pl-6 lg:pl-20 pb-10 gap-10 lg:gap-20">
          <div className="flex w-full lg:w-[50vw]">
            <div className="relative">
              <h1
                ref={heroHeadingRef}
                className="animation-txt text-54xl font-semibold text-white mb-5 pr-6 sm:pr-0" style={{ visibility: 'hidden' }}
              >
                Track time. Improve performance.
              </h1>
              <motion.p  variants={fadeInUp}
        initial="hidden"
        animate={showParagraph ? "visible" : "hidden"} className="w-full sm:w-[85%] text-2xl text-white/90 max-w-full leading-relaxed mb-0 pr-6 sm:pr-0">
                Monitor employee work hours, break time, and productivity in real time to ensure every minute counts and working time stays optimized.
              </motion.p>
            </div>
          </div>

          <div className="flex w-full lg:w-[50vw] justify-end">
            <MotionImage
              src="/right.png"
              alt="dashboard"
              variants={fadeInRight}
              initial="hidden"
              animate={showImage ? "visible" : "hidden"}
              width={1920}
              height={1080}
              className="w-full h-[100%] items-right rounded-tl-xl rounded-bl-xl w-32 h-32 shadow-[0_0_10px_0_rgba(168,85,247,0.62)]"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="about" className="flex flex-col lg:flex-row px-6 lg:px-20 py-20 gap-20">
        {/* Left Side - Text Content */}
        <motion.div  variants={fadeInUp}
        initial="hidden"
        animate={showParagraph ? "visible" : "hidden"} className="w-full lg:w-[50%] flex flex-col">
          <h2 className="text-54xl font-semibold text-white mb-6 leading-tight">
            Everything You Need For Your Time
          </h2>
          <p className="text-2xl text-white/90 mb-8 leading-relaxed">
            Explore how leaders across different roles use TimeFlow's workforce analytics to achieve their goals.
          </p>
          <Button className="w-fit px-6 py-4">
            Talk to sales
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </motion.div>

        {/* Right Side - Feature Cards Grid */}
        <div className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-[#1F2937] rounded-xl py-12 px-6 flex flex-col items-center shadow-[0_0_8px_0_rgba(168,85,247,0.62)] relative z-[1]"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80 text-md leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard Metrics Section */}
      <div id="features" className="px-6 py-6 sm:px-20 sm:py-20">
        <h2 className="text-6xl font-semibold text-white text-center mb-12">
          Features
        </h2>
        
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Total Hours */}
          <div className="bg-transparent rounded-xl p-8 flex flex-col items-center border border-white">
            <span ref={totalHoursRef} className="text-5xl font-bold text-white mb-2">
              0h
            </span>
            <p className="text-white/80 text-lg">Total Hours</p>
          </div>

          {/* Active Team Members */}
          <div className="bg-transparent rounded-xl p-8 flex flex-col items-center  border border-white">
            <span ref={teamMembersRef} className="text-5xl font-bold text-white mb-2">
              0
            </span>
            <p className="text-white/80 text-lg">Active Team Members</p>
          </div>

          {/* Billable Hours */}
          <div className="bg-transparent rounded-xl p-8 flex flex-col items-center  border border-white">
            <span ref={billableHoursRef} className="text-5xl font-bold text-white mb-2">
              0h
            </span>
            <p className="text-white/80 text-lg">Billable Hours</p>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="w-full flex justify-center">
          <div className="w-full bg-[#1F2937] rounded-xl flex items-center justify-center">
            <Image src="/dashboard.png" alt="dashboard" width={4096} height={4096} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="pricing-section px-6 sm:px-20 py-6 sm:py-20 overflow-hidden" style={{ perspective: '1000px' }}>
        <h2 className="text-6xl font-semibold text-white text-center mb-10">
          Choose Your Plan
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mx-auto lg:min-h-[600px] items-center" style={{ transformStyle: 'preserve-3d', justifyItems: 'center' }}>
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.title}
              className={`pricing-card 
                ${index === 0 ? "left-card" : index === 1 ? "center-card" : "right-card"} 
                bg-[#111827] w-full lg:w-[30%] rounded-2xl p-10 relative lg:absolute items-center justify-center shadow-[0_0_10px_4px_rgba(59,130,246,0.61)]`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-xl text-white/80 ml-1">{plan.period}</span>
                </div>

                <div className="flex-1 mb-6">
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex}>
                        <p className="text-white text-sm mb-2">{feature}</p>
                        {featureIndex < plan.features.length - 1 && (
                          <div className="w-full h-px bg-white/20"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full text-white border-0 mt-auto">
                  Select Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

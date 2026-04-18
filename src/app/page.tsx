"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';
import { CheckCircle, Clock, Shield, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "products"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="NL FINANCE"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      title="Your Trusted Partner in Financial Freedom"
      description="At NL FINANCE, we provide reliable and fast financial solutions tailored to your unique needs, led by Mr. Jeet Kumar Yadav."
      testimonials={[
        {
          name: "Anil S.",          handle: "@customer",          testimonial: "Excellent service and quick approval for my home loan.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/modern-office-composition-with-businessman_23-2147900141.jpg",          imageAlt: "finance banking loan professional desk"},
        {
          name: "Priya D.",          handle: "@customer",          testimonial: "Very transparent and professional team at NL Finance.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-receiving-keys-their-new-home-from-realtor_23-2148895470.jpg",          imageAlt: "finance banking loan professional desk"},
        {
          name: "Rahul M.",          handle: "@customer",          testimonial: "Gold loan process was seamless and instant.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-realtor-handshaking-couple-congratulate-them-their-new-house_23-2148895484.jpg",          imageAlt: "finance banking loan professional desk"},
        {
          name: "Sunita K.",          handle: "@customer",          testimonial: "They helped me with a mortgage loan with low rates.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-abstract-with-extruding-blocks_1048-12726.jpg",          imageAlt: "finance banking loan professional desk"},
        {
          name: "Vikram J.",          handle: "@customer",          testimonial: "The best financial advisors in Goregaon.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-man-talking-his-wife-while-using-touchpad-meeting-with-real-estate-agent-office_637285-1140.jpg",          imageAlt: "finance banking loan professional desk"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-office-composition-with-businessman_23-2147900141.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-senior-man-holding-smart-phone_23-2147935571.jpg",          alt: "Portrait of smiling senior man holding smart phone"},
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-woman-smiling_93675-133804.jpg",          alt: "Beautiful woman smiling"},
        {
          src: "http://img.b2bpic.net/free-photo/confident-businessman-working-desk_273609-12807.jpg",          alt: "Confident businessman working at the desk"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-businesswoman_1098-14872.jpg",          alt: "Happy businesswoman"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-businessman-work_1098-286.jpg",          alt: "Smiling businessman at work"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Low Interest Rates"},
        {
          type: "text",          text: "100% Transparent"},
        {
          type: "text",          text: "Quick Approvals"},
        {
          type: "text",          text: "Goregaon Based"},
        {
          type: "text",          text: "Financial Freedom"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="About Us"
      title="Welcome to NL FINANCE"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Home Loan",          price: "Low Interest",          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-receiving-keys-their-new-home-from-realtor_23-2148895470.jpg"},
        {
          id: "p2",          name: "Mortgage Loan",          price: "Custom Terms",          imageSrc: "http://img.b2bpic.net/free-photo/female-realtor-handshaking-couple-congratulate-them-their-new-house_23-2148895484.jpg"},
        {
          id: "p3",          name: "Gold Loan",          price: "Instant Funds",          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-abstract-with-extruding-blocks_1048-12726.jpg"},
        {
          id: "p4",          name: "Personal Loan",          price: "Fast Track",          imageSrc: "http://img.b2bpic.net/free-photo/happy-man-talking-his-wife-while-using-touchpad-meeting-with-real-estate-agent-office_637285-1140.jpg"},
        {
          id: "p5",          name: "Auto Loan",          price: "Easy Pay",          imageSrc: "http://img.b2bpic.net/free-photo/businessman-video-conferencing_23-2148738300.jpg"},
        {
          id: "p6",          name: "Business Loan",          price: "Growth Capital",          imageSrc: "http://img.b2bpic.net/free-photo/businessmen-with-bills-background-white-columns_1134-521.jpg"},
      ]}
      title="Our Loan Offerings"
      description="Choose from our wide range of flexible financial products."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: CheckCircle,
          title: "Transparent Process",          description: "Clear communication with no hidden fees."},
        {
          icon: Clock,
          title: "Fast Approval",          description: "Get your funds disbursed in record time."},
        {
          icon: Shield,
          title: "Safe & Secure",          description: "Your documents are handled with the highest security."},
        {
          icon: Users,
          title: "Expert Guidance",          description: "Advice tailored to your unique financial situation."},
        {
          icon: Users,
          title: "Customer-First",          description: "We prioritize your needs above all else."},
      ]}
      title="Why Choose Us?"
      description="We ensure every client receives the best financial support."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "How to apply?",          content: "Visit our Goregaon office with your documents."},
        {
          id: "2",          title: "What documents are required?",          content: "Identity proof, address proof, and income documentation."},
        {
          id: "3",          title: "Do you offer doorstep service?",          content: "Yes, for select loan products and locations."},
        {
          id: "4",          title: "Is there a prepayment fee?",          content: "We offer flexible repayment terms and transparent fee structures."},
        {
          id: "5",          title: "How long does it take?",          content: "Our streamlined process ensures quick approval, often within 24-48 hours."},
      ]}
      sideTitle="Frequently Asked Questions"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "1000+",          title: "Loans Sanctioned",          description: "Happy families served",          imageSrc: "http://img.b2bpic.net/free-photo/real-estate-theme-composition_23-2147764193.jpg"},
        {
          id: "m2",          value: "100%",          title: "Transparent Dealings",          description: "Commitment to honesty",          imageSrc: "http://img.b2bpic.net/free-photo/golden-abacus-with-chinese-rmb-gold-coins-as-background_1387-2.jpg"},
        {
          id: "m3",          value: "24/7",          title: "Dedicated Support",          description: "Always here for you",          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-presenting-growth-chart-modern-office-setting_23-2152011793.jpg"},
      ]}
      title="Our Impact"
      description="Helping thousands achieve their dreams."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          title: "Satisfied!",          quote: "NL Finance made my dream home a reality.",          name: "Sarah",          role: "CEO",          imageSrc: "http://img.b2bpic.net/free-photo/joyful-business-woman-with-coffee-cup_23-2148095746.jpg"},
        {
          id: "t2",          title: "Amazing",          quote: "Professional team with great ethics.",          name: "John",          role: "Owner",          imageSrc: "http://img.b2bpic.net/free-photo/person-expressing-appreciation-their-workmates_23-2149430632.jpg"},
        {
          id: "t3",          title: "Very Helpful",          quote: "Quick process, highly recommended.",          name: "Emma",          role: "Manager",          imageSrc: "http://img.b2bpic.net/free-photo/business-man-showing-ok-sign_23-2148479592.jpg"},
        {
          id: "t4",          title: "Great Rates",          quote: "Better rates than big banks.",          name: "David",          role: "Developer",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-with-digital-tablet_1098-651.jpg"},
        {
          id: "t5",          title: "Fast",          quote: "Received funds in 24 hours.",          name: "Maria",          role: "Doctor",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-african-american-girl-sitting-cafe_1262-3083.jpg"},
      ]}
      title="Client Success Stories"
      description="Hear from our happy customers."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Contact Us"
      title="Get in Touch with NL FINANCE"
      description="Office Address: Maharashtra, Mumbai-400097, Goregaon(e), opposite of Karnataka Bank. Phone: 9833463127, 9833463192. Email: yjeet20@gmail.com"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Services",          items: [
            {
              label: "Home Loan",              href: "#products"},
            {
              label: "Gold Loan",              href: "#products"},
          ],
        },
      ]}
      bottomLeftText="© 2024 NL FINANCE. All rights reserved."
      bottomRightText="Managed by Mr. Jeet Kumar Yadav"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

import React from "react";
import paymentMethods from "../../assets/images/Payment-methods.png";

interface FooterSectionProps {
  className?: string;
}

const Footer: React.FC<FooterSectionProps> = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${className}`}>
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <p className="text-sm leading-relaxed mb-6">
              Click keya is the Best Digital Marketing agency in the USA. We
              Provide Authentic Elite Social Media accounts and SMM Promotion
              Services With a 100% Guarantee. Feel free to contact us. We are
              online 24 hours a day!
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <SocialIcon href="#" ariaLabel="Twitter">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.925-12.092c-.88-.62-1.84-1.11-2.86-1.46z" />
              </SocialIcon>

              <SocialIcon href="#" ariaLabel="Facebook">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </SocialIcon>

              <SocialIcon href="#" ariaLabel="Google Plus">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </SocialIcon>

              <SocialIcon href="#" ariaLabel="Pinterest">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.174.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
              </SocialIcon>

              <SocialIcon href="#" ariaLabel="LinkedIn">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </SocialIcon>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <FooterLink href="#">SEO Marketing</FooterLink>
              <FooterLink href="#">SEO Services</FooterLink>
              <FooterLink href="#">Pay Per Click</FooterLink>
              <FooterLink href="#">Social Media</FooterLink>
              <FooterLink href="#">SEO Audit</FooterLink>
            </ul>
          </div>

          {/* Community / Payment Methods Column */}
          <div>
            <h4 className=" text-lg font-semibold mb-4">Community</h4>
            <img
              src={paymentMethods}
              alt="Payment methods"
              className="w-full max-w-[300px] h-auto"
              loading="lazy"
            />
          </div>

          {/* Contact Us Column */}
          <div>
            <h4 className=" text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm mb-4">
              If you want more information, please contact us –
            </p>

            <div className="space-y-2 text-sm">
              <ContactLink label="Email:" href="mailto:clickkeya242@gmail.com">
                clickkeya242@gmail.com
              </ContactLink>

              <ContactLink
                label="Telegram:"
                href="https://t.me/Clickkeya"
                target="_blank"
              >
                @Clickkeya
              </ContactLink>

              <ContactLink
                label="Skype:"
                href="skype:live:.cid.b732b2a8b38635fe?chat"
              >
                live:.cid.b732b2a8b38635fe
              </ContactLink>

              <ContactLink
                label="WhatsApp:"
                href="https://wa.me/15186171525"
                target="_blank"
              >
                +15186171525
              </ContactLink>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>© {currentYear} — Click Keya by All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
interface SocialIconProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  ariaLabel,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10  hover:bg-orange-500 rounded flex items-center justify-center  transition-colors duration-300"
    aria-label={ariaLabel}
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      {children}
    </svg>
  </a>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <a
      href={href}
      className=" hover:text-orange-500 transition-colors duration-300"
    >
      {children}
    </a>
  </li>
);

interface ContactLinkProps {
  label: string;
  href: string;
  target?: string;
  children: React.ReactNode;
}

const ContactLink: React.FC<ContactLinkProps> = ({
  label,
  href,
  target,
  children,
}) => (
  <p className="">
    {label}{" "}
    <a
      href={href}
      {...(target && { target, rel: "noopener noreferrer" })}
      className="text-purple-400 hover:text-orange-500 transition-colors duration-300"
      style={{ color: "#877dee" }}
    >
      {children}
    </a>
  </p>
);

export default Footer;

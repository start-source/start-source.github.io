import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Free Next.js Template for Startup and SaaS",
  description: "Privacy Policy for our platform",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Information We Collect
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                How We Use Your Information
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Information Sharing
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Data Security
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Cookies
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect the functionality of our site.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Contact Us
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                If you have any questions about this Privacy Policy, please contact us through our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
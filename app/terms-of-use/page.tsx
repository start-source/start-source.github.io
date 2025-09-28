import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Free Next.js Template for Startup and SaaS",
  description: "Terms of Use for our platform",
};

const TermsOfUsePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Use"
        description="Guidelines for using our platform and services."
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Acceptable Use
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                You agree to use our platform only for lawful purposes and in accordance with these Terms of Use. You agree not to use the platform:
              </p>
              <ul className="mb-6 ml-6 list-disc text-base text-body-color dark:text-body-color-dark">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To harass, abuse, or harm another person</li>
                <li>To impersonate or attempt to impersonate another person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use of the platform</li>
              </ul>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                User Accounts
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and all activities that occur under your account.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Content Guidelines
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                Our platform may allow you to post, upload, or submit content. You retain ownership of any intellectual property rights that you hold in that content. However, by posting content, you grant us a license to use, modify, and distribute your content.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Prohibited Activities
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                You may not access or use the platform for any purpose other than that for which we make the platform available. Prohibited uses include:
              </p>
              <ul className="mb-6 ml-6 list-disc text-base text-body-color dark:text-body-color-dark">
                <li>Attempting to interfere with, compromise the system integrity or security</li>
                <li>Using any automated system to access the platform</li>
                <li>Attempting to gain unauthorized access to any part of the platform</li>
              </ul>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Termination
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                We may terminate or suspend your account and bar access to the platform immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever including without limitation if you breach the Terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUsePage;
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Free Next.js Template for Startup and SaaS",
  description: "Pricing plans for our startup and SaaS solutions",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pricing"
        description="Choose the perfect plan for your business needs."
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Basic Plan */}
            <div className="w-full">
              <div className="relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp dark:bg-[#1D2430]">
                <div className="flex items-center justify-between">
                  <h3 className="price mb-2 text-[42px] font-bold text-black dark:text-white">
                    $0<span className="text-body-color text-base font-medium">/ mo</span>
                  </h3>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  Starter
                </h4>
                <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base text-body-color dark:border-white dark:border-opacity-10 dark:text-body-color-dark">
                  Perfect for getting started with our platform.
                </p>
                <div className="mb-9 flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    ✓ 1 User
                  </p>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    ✓ Basic Features
                  </p>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    ✓ Email Support
                  </p>
                </div>
                <a
                  href="#"
                  className="block w-full rounded-md bg-primary p-3 text-center text-base font-semibold text-white transition duration-300 hover:bg-opacity-90"
                >
                  Choose Plan
                </a>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="w-full">
              <div className="relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp dark:bg-[#1D2430]">
                <div className="flex items-center justify-between">
                  <h3 className="price mb-2 text-[42px] font-bold text-black dark:text-white">
                    $29<span className="text-body-color text-base font-medium">/ mo</span>
                  </h3>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  Professional
                </h4>
                <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base text-body-color dark:border-white dark:border-opacity-10 dark:text-body-color-dark">
                  Perfect for growing businesses and teams.
                </p>
                <div className="mb-9 flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    ✓ 10 Users
                  </p>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    ✓ Advanced Features
                  </p>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    ✓ Priority Support
                  </p>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    ✓ Analytics Dashboard
                  </p>
                </div>
                <a
                  href="#"
                  className="block w-full rounded-md bg-primary p-3 text-center text-base font-semibold text-white transition duration-300 hover:bg-opacity-90"
                >
                  Choose Plan
                </a>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="w-full">
              <div className="relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp dark:bg-[#1D2430]">
                <div className="flex items-center justify-between">
                  <h3 className="price mb-2 text-[42px] font-bold text-black dark:text-white">
                    $99<span className="text-body-color text-base font-medium">/ mo</span>
                  </h3>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  Enterprise
                </h4>
                <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base text-body-color dark:border-white dark:border-opacity-10 dark:text-body-color-dark">
                  Perfect for large organizations with advanced needs.
                </p>
                <div className="mb-9 flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    ✓ Unlimited Users
                  </p>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    ✓ All Features
                  </p>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    ✓ 24/7 Support
                  </p>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    ✓ Custom Integration
                  </p>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    ✓ White-label Options
                  </p>
                </div>
                <a
                  href="#"
                  className="block w-full rounded-md bg-primary p-3 text-center text-base font-semibold text-white transition duration-300 hover:bg-opacity-90"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
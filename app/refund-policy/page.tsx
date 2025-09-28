import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Free Next.js Template for Startup and SaaS",
  description: "Refund Policy for our platform",
};

const RefundPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Refund Policy"
        description="Our commitment to customer satisfaction includes a fair refund policy."
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                30-Day Money Back Guarantee
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                We offer a 30-day money back guarantee for all our paid plans. If you&apos;re not satisfied with our service, you can request a full refund within 30 days of your purchase.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Refund Eligibility
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                To be eligible for a refund, you must request it within 30 days of your initial purchase. Refunds are not available for:
              </p>
              <ul className="mb-6 ml-6 list-disc text-base text-body-color dark:text-body-color-dark">
                <li>Accounts that have exceeded usage limits</li>
                <li>Violations of our terms of service</li>
                <li>Requests made after 30 days</li>
              </ul>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                How to Request a Refund
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                To request a refund, please contact our support team through our contact page. Include your account details and reason for the refund request.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Processing Time
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                Approved refunds will be processed within 5-7 business days. The refund will be credited to the original payment method used for the purchase.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Contact Us
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                If you have any questions about our refund policy, please don&apos;t hesitate to contact our support team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicyPage;
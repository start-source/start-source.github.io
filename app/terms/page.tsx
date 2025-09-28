import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Free Next.js Template for Startup and SaaS",
  description: "Terms of Service for our platform",
};

const TermsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Service"
        description="Please read these terms of service carefully before using our platform."
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                1. Acceptance of Terms
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                2. Use License
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                3. Disclaimer
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                The materials on our website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                4. Limitations
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                5. Governing Law
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
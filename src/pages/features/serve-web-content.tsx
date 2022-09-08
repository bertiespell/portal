import Link from "@docusaurus/Link";
import { CardWithDescription } from "@site/src/components/Common/Card";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import { resetNavBarStyle } from "@site/src/utils/reset-navbar-style";
import RightPointer from "@site/static/img/svgIcons/rightPointer.svg";
import Layout from "@theme/Layout";
import React from "react";

function FeaturePage() {
  resetNavBarStyle();
  return (
    <Layout
      title="Serve Web Content"
      // fill in meta description
      description=""
    >
      <main className="text-black relative">
        <section className="overflow-hidden bg-infinite text-white">
          <DarkHeroStyles></DarkHeroStyles>
          <div className="container-10 pt-12 mb-30 md:mb-52 md:pt-36 relative">
            <div className="md:w-7/10">
              <h1 className="tw-heading-3 md:tw-heading-2 mb-6">
                Serve Web Content
              </h1>
              <p className="tw-lead-sm md:tw-lead mb-0">
              The Internet Computer (IC) is the only blockchain that can host a full dapp on-chain: frontend, backend, and data included.
              <br />
              <br />
              
              This is a disginguishing feature of the IC because most non-IC dapps are composed of a smart contract on a blockchain (say 5-10% of the code) and the rest of the code executing on centralized services (90-95% of the code).
              The IC is the only blockchain that can host a dapp's frontend (e.g. HTML, CSS, JS) as well as application logic and store GBs of data. 
              <br />
              <br />
              This means the IC is the only blockchain that can be serve dapps that are truly secure and can take advantage of blockchain properties: e.g. code immutability, tokenized governande of dapps. 

              </p>
            </div>
          </div>
          <div className="container-10 relative">
            <img
              src="/img/whiteBlurredCircle.png"
              alt=""
              className="absolute pointer-events-none max-w-none w-[800px] aspect-square -right-[200px] bottom-[-400px] md:w-[1500px] md:bottom-[-680px] md:right-[-550px] object-contain object-center"
            />
          </div>
        </section>
        <section className="container-10 relative  mt-20 lg:mt-40 mb-20 md:mb-60 flex flex-col sm:flex-row sm:gap-10 md:gap-48">
          {/* 
            delete this div if image is not needed 
          */}
          <div className="sm:order-2 sm:shrink-0 sm:flex-1 mb-10">
            <img
              src="/img/bitcoin-integration/howItWorks.png"
              alt=""
              className="w-full block"
            />
          </div>

          <div
            className="
            sm:flex-1 
            prose 
            prose-h2:tw-heading-5 prose-h2:md:tw-heading-3 prose-h2:mb-2 prose-h2:md:mb-6
            prose-h3:tw-heading-7 prose-h3:mb-2
            prose-p:tw-paragraph prose-p:mb-4
            prose-a:underline prose-a:text-infinite hover:prose-a:text-black hover:prose-a:no-underline
            "
          >
            <h2>How It Works</h2>
            <p>
              For a the IC to host fully-on chain dapps and <Link href="https://wiki.internetcomputer.org/wiki/Web_Serving">
                serve web content
              </Link>, it means the following:
            </p>
            <h3>Enabling true web3</h3>
            <p>
            Today, most dapps built on other blockchains rely on centralized cloud providers (e.g. AWS, GCP) to 
            host their frontend, amongst other parts, which introduces a single point of failure. 
            An example pattern in the industry is to have a smart contract performing some computation, yet, 
            the frontend is often served from a Node server. This not only includes security risks by possible 
            tampering with the frontend, but dapps running on centralized servers can be taken down at any point, 
            which negates the censorship resistant nature of blockchain. Web3 requires that all parts of a dapp 
            are realized by smart contracts. Further, Web3 functionality is only achievable by blockchain 
            applications running fully decentralized, which includes smart contract logic, on-chain data 
            storage and serving frontend to the user's browser.
            <br />
            <br />
            Hosting dapps 100% on-chain provides the additional benefit of letting DAOs launched on the 
            Internet Computer to completely control these applications with on-chain governance and 
            not only the backend logic. This lets users be fully in control of these dapps realizing 
            complete decentralization and democratization of web applications.
            </p>

            <h3>Cheap Storage</h3>
            <p>
            Unlike most blockchains, the efficiency and costs of the Internet Computer approaches the traditional IT 
            stack so its is economically feasible to host dapps with lots of data and content.
            <br />
            <br />
            For comparison: <i>it costs hundreds of millions of dollars to store a GB of data on Ethereum.  
            It only costs a few dollars on the IC.</i>
            </p>

            <h3>Smart contracts that can process HTTP requests</h3>
            <p>
            Blockchains differ in their processing of computation from regular web servers, which makes serving web a difficult task. 
            To overcome this, the Internet Computer introduces something called boundary nodes. 
            These nodes act as a layer that translates HTTP requests from users to messages that can be processed by 
            smart contracts running on the Internet Computer. This allows users to update the state of the blockchain 
            simply by interacting with a browser.
            </p>

            <h3>Reverse gas model</h3>
            <p>
            In dapps built on Ethereum (as an example), users require a wallet or tokens to use it. 
            This slows down adoption of dapps because using a dapp is not as simple as clicking on a 
            website link; it requires users to buy tokens, install browser plugins, etc. 
            IC dapps have he "Reverse Gas model" where users can interact with a dapp without having to pay in 
            tokens since the canister can store a certain amount of cycles and pay for the user.
            <br />
            <br />
            For example, <Link href="https://wiki.internetcomputer.org/wiki/Web_Serving">
            the Motoko Playground dapp</Link> is hosted and executed entirely on-chain and it does not require visitors to pay for the computation.
            </p>

            <p>
            </p>

            <p className="mb-3 mt-6">
              <Link
                href="https://internetcomputer.org/showcase/"
                className="tw-heading-6 flex gap-2 items-center"
              >
                <RightPointer className="w-6 h-6"></RightPointer>
                See other 100% on-chain dapps
              </Link>
            </p>
          </div>
        </section>

        <section className="max-w-page relative mx-auto mb-20 px-6 md:mb-40 md:px-15">
          <p className="tw-heading-4 text-center mb-2 w-full mx-auto md:tw-heading-2 md:mb-6 lg:w-8/12">
            Build fully on-chain dapps
          </p>
          <p className="tw-lead-sm mb-2 text-center mx-auto md:mb-6 md:w-6/12">
            Get started today.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-20">
            {/* add or remove CardWithDescription components on demand */}

            <CardWithDescription
              title="Deploy a 'Hello World' Dapp in 10 Minutes"
              description="Get started with your first IC dapp"
              href="/docs/current/developer-docs/quickstart/hello10mins."
            />
            <CardWithDescription
              title="Build dapps with the language of your choice"
              description="Install SDKs to build dapps."
              href="/docs/current/developer-docs/build/cdks/"
            />
            <CardWithDescription
              title="Sample Code"
              description="Learn about IC capabilitis from community samples."
              href="/samples"
            />
            <CardWithDescription
              title="IC Wiki"
              description="Take a deep dive into the Internet Computer."
              href="https://wiki.internetcomputer.org"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default FeaturePage;

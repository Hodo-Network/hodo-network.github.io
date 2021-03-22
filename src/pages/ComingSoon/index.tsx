import { TEXT_COMING_SOON } from "../../constants/text";

export default function ComingSoon() {
  return (
    <main className='px-4 sm:px-8 lg:px-12 py-12 flex-grow'>
      <div className='mx-auto max-w-4xl'>
        <p className='text-2xl font-medium dark:text-white'>
          {TEXT_COMING_SOON}
        </p>
        <p className='mt-4 dark:text-white'>
          Our launch is right around the corner! In the meantime, you can setup
          an Avalanche wallet so you're ready to buy NFTs in the marketplace.
        </p>

        <div className='mt-8'>
          <div className='bg-white shadow overflow-hidden sm:rounded-md'>
            <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
              <h3 className='text-lg leading-6 font-medium uppercase text-indigo-700 dark:text-indigo-500'>
                Avalanche Wallet Setup
              </h3>
              <p className='mt-1 text-sm'>
                We have provided info below for setting up a Mainnet and Testnet
                wallet. Initially, we'll allow users to use the Testnet to
                familiarize themselves with the site.
              </p>
            </div>
            <ul className='divide-y divide-gray-200 text-sm'>
              <li className='px-4 py-4 sm:px-6'>
                <p className='font-medium text-base'>Install MetaMask</p>
                <p className='mt-1'>
                  Go directly to{" "}
                  <a
                    href='https://metamask.io/'
                    target='_blank'
                    rel='noreferrer'
                    className='text-indigo-600 font-medium'>
                    MetaMask.io
                  </a>{" "}
                  to download the extension. Never search Google for MetaMask
                  download links. You may end up at a phishing website designed
                  to steal your funds.
                </p>
              </li>
              <li className='px-4 py-4 sm:px-6'>
                <p className='font-medium text-base'>Setup New Wallet</p>
                <p className='mt-1'>
                  Click on the extension and go through the prompts to setup a
                  new wallet.
                </p>
              </li>
              <li className='px-4 py-4 sm:px-6'>
                <p className='font-medium text-base'>Add a Custom RPC</p>
                <p className='mt-1'>
                  Avalanche isn't a default network so we'll need to add it
                  ourselves.
                </p>
                <ul className='list-disc pl-8 mt-2'>
                  <li>
                    At the top, click <b>Ethereum Mainnet</b> to open up the
                    network dropdown.
                  </li>
                  <li>
                    Scroll to the bottom and select <b>Custom RPC</b>.
                  </li>
                  <li>
                    Fill in the textfields using the info provided below then
                    click Save.
                  </li>
                </ul>

                <table className='mt-4 w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Field
                      </th>
                      <th
                        scope='col'
                        className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Mainnet
                      </th>
                      <th
                        scope='col'
                        className='px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Testnet
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    <tr>
                      <td className='px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900'>
                        Network Name
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-500'>
                        Avalanche Mainnet C-Chain
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-500'>
                        Avalanche FUJI C-Chain
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900'>
                        New RPC URL
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-500'>
                        https://api.avax.network/ext/bc/C/rpc
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-500'>
                        https://api.avax-test.network/ext/bc/C/rpc
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900'>
                        Chain ID
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-500'>
                        0xa86a
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-500'>
                        0xa869
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900'>
                        Currency Symbol
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-500'>
                        AVAX
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-500'>
                        AVAX
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900'>
                        Block Explorer URL
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-500'>
                        https://cchain.explorer.avax.network/
                      </td>
                      <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-500'>
                        https://cchain.explorer.avax-test.network/
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li className='px-4 py-4 sm:px-6'>
                <p className='font-medium text-base'>
                  Select the Avalanche Network
                </p>
                <p className='mt-1'>
                  Select Avalanche Mainnet or Avalanche Testnet from the network
                  dropdown.
                </p>
              </li>
              <li className='px-4 py-4 sm:px-6'>
                <p className='font-medium text-base'>Add Funds</p>
                <p className='mt-1'>
                  <b>Mainnet</b>: you need to purchase AVAX from an exchange and
                  send it to your wallet address. You may need to{" "}
                  <a
                    href='https://wallet.avax.network/'
                    target='_blank'
                    rel='noreferrer'
                    className='text-indigo-600 font-medium'>
                    create a wallet
                  </a>{" "}
                  with an X-Chain address first. Then make the transfer to your
                  the C-Chain address which is what we're creating in MetaMask.
                </p>
                <p className='mt-4'>
                  <b>Testnet</b>: you can request AVAX from the{" "}
                  <a
                    href='https://faucet.avax-test.network/'
                    target='_blank'
                    rel='noreferrer'
                    className='text-indigo-600 font-medium'>
                    AVAX Test Faucet
                  </a>{" "}
                  by pasting in "C-" followed by your wallet address.
                  <br />
                  Example: C-0x6B49B1CD9c0624FfD3c31E59DA8758892e3f4cB5
                </p>
              </li>
              <li className='px-4 py-4 sm:px-6'>
                <p className='font-medium text-base'>Finished</p>
                <p className='mt-1'>
                  After we launch you'll be ready to buy your first NFT from
                  Hodo Network.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

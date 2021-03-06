import React from "react";
import { faqs } from "../../data/faqs";
import ContentWrapper from "../ContentWrapper";
import { FaqList } from "../../components";

const headline = "Frequently Asked Questions";

export default function Faq() {
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl divide-y-2 divide-gray-200 dark:divide-gray-800'>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white'>
          {headline}
        </h2>
        <div className='mt-6'>
          <FaqList items={faqs} />
        </div>
      </div>
    </ContentWrapper>
  );
}

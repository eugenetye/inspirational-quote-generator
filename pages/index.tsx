import Image from 'next/image'
import Head from 'next/head'
import React, { useState } from 'react'

//Components
import { GradientBackgroundCon, BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorTitle, QuoteGeneratorSubTitle, GenerateQuoteButton, GenerateQuoteButtonText } from '@/components/QuoteGenerator/QuoteGeneratorElements'

// Assets
import Clouds1 from '@/assets/cloud-and-thunder.png'
import Clouds2 from '@/assets/cloudy-weather.png'

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel = "icon" href='/favicon.ico'/>
      </Head>
      {/* Background */}
      <GradientBackgroundCon>

        {/* Quote Generator Modal Pop-up */}
        {/* <QuoteGeneratorModal/> */}

        {/* Quote Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>

            <QuoteGeneratorTitle>
              Inspirational Quote Generator
            </QuoteGeneratorTitle>

            <QuoteGeneratorSubTitle>
            Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes API</FooterLink>.
            </QuoteGeneratorSubTitle>

            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={null}>
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>

          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

        

        {/* Background Images */}
        <BackgroundImage1
          src = {Clouds1}
          height = "300"
          alt = "cloudybackground1"
        />
        <BackgroundImage2
          src = {Clouds2}
          height = "300"
          alt = "cloudybackground2"
        />

        {/* Footer */}
        <FooterCon>
          <>
            Quotes Generated: {numberOfQuotes}
            <br/>
            Developed by <FooterLink href = "https://eugenetye.com/" 
            target="_blank" rel="noopener and noreferrer"> Eugene Tye</FooterLink>
          </>
        </FooterCon>

      </GradientBackgroundCon>
    </>
  )
}

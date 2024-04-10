/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      display:["Source Code Pro", "monospace"]
    },
    extend: {
      screens: {

        tablet: "250px", // Add custom breakpoint
        desktop: "1189px", // Add another custom breakpoint
      },
      animation: {
        typewriter: 'typewriter 4s steps(12) 1.5s forwards',
        /*In above animation 1.5s is delay */
        caret: 'typewriter 4s steps(12) 1.5s forwards, blink .75s step-end 9.3',
        /* In above niamtion in typewriter part 1.5s is delay but in blinking there is no delay */
        typewriterSecond: 'typewriter 5s steps(47) 8.2s forwards',
        /* In this typewriter animation for second line 8.2 second is delay and 7s is duration of animation */
        caretFirst: 'typewriter 5s steps(45) 8.2s forwards, blinkCaret .75s step-end 9.3 7.2s',
        /*In this line 8.2 s is delay for tyepwriter and and in blinking 9.3 is duration of blinking animation while 7.2 is delay */
        fadeInAnimation : 'fadeInAnimation 4s ease 13.5s forwards',
        /*In abovr animation 13.5 is delay and 4s is duration */
      },
      keyframes: {
        fadeInAnimation: {
          "0%": {
              opacity: 0
          },

          "100%": {
              opacity: 1
          },
        },
        typewriter: {
          to: { left: '100%' },
        },
        blink: {
          "0%":{
            backgroundColor : '#eaeced',
          },
          "50%": {
            backgroundColor : '#182633',
          },
          "100%":{
            backgroundColor : '#eaeced',
          },     
        
        },
        blinkCaret:{
          "0%":{
            backgroundColor : '#eaeced',
          },
          "50%": {
            backgroundColor : '#182633',
          },
          "100%":{
            backgroundColor : '#eaeced',
          }, 
        }
      },
      
     

      colors: {
        landingPage: '#182633',
        headingFontColor:"#eaeced",
        landingPageButton:'#f15a29',
        hoverOverColor:'#e5edff'
      },
    },
  },
  plugins: [],
}




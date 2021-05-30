  // tailwind.config.js
  module.exports = {
    purge: ['./dist/*.html'],
     darkMode: false,
     theme: {
       extend: {
        spacing: {
          '13': '3.3rem',
          '13.5': '3.4285714286rem'
        },
        height: {
          '100': '25rem',
         },
         colors: {
           gray: {
             0: '#eee'
            },
           red: {
             0: '#db3d44'
           }
         }
       },
     },
     variants: {
       extend: {
        backgroundColor: ['active'],
      }
     },
     plugins: [],
   }


 module.exports={

     randomString:  (length) => {
         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         let result = '';
         // program to generate random strings

         const charactersLength = characters.length;
         for (let i = 0; i < length; i++) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
         }


         return result;
     }
};

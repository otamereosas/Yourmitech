import styled from "styled-components";

export const Topwrapper = styled.div`
   padding: 1rem 3rem;
   width: 100%;
   display: flex;
   justify-content: space-between;
   background: black;
   color: white;
   font-size: 12.5px;

   .location {
      display: flex;
      h2{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         margin-right: 10px;
         font-size: 20px;
        }
      }
      
      .phone {
        display: flex;
        h2{
          display: flex;
          flex-direction: column;
          font-size: 20px;
         justify-content: center;
         align-items: center;
         margin-right: 10px;
      }
   }
   .mail {
      display: flex;
      p,
      a {
         display: flex;
         /* flex-direction: column; */
         justify-content: center;
         align-items: center;
      }
   }

   @media screen and (max-width: 700px){
     background: teal;
     padding: 1rem;
   }

   @media screen and (max-width: 550px){
     .location{
       display: none;
     }
   }
`;

export const NavWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 2.6rem 3rem 3.2rem;

   .logo {
      display: flex;
      h2 {
         /* color: #459975; */
         color: #009985;
         margin-top: -0.3rem;
         padding: 0;
      }
      span {
         margin-top: 5px;
         font-size: 11px;
      }
   }

   @media screen and (max-width: 799px) {
      padding: 2rem 0.5rem 2.5rem;
   }
`;

export const NavLinks = styled.div`
   display: flex;
   justify-content: space-between;

   button {
      padding: 5px;
      width: 80px;
      background: transparent;
      color: white;
      border-radius: 5px;
      margin-left: 0.6rem;
      border: 2px solid transparent;
      cursor: pointer;
   }

   button:focus {
      border: 2px solid #459975;
   }
`;

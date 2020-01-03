import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components'



const AddForm = styled.div`
margin: 15px;
text-align: center;
`;

const PageName = styled.h1`
text-align: Left;
`;

const AddVidDiv = styled.div`
text-align: center;

`;

const Button = styled.button`
background-color: #35524A; 
color: #FFFFFF;
top: 690px;
left: 16px;
width: 343px;
height: 44px;
font-weight: Bold;
font-size: 0.875rem; 
margin-top: 20px; 
display: inline-block
`;

const Titles = styled.p`
font-size: 0.8125rem;
text-align: left;
`;

const VidBox = styled.div`
top: 100px;
left: 16px;
width: 100%;
height: 229px;
background: #F2F2F2;
display: inline-block;
`;








export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (

    

    <AddForm>
      <PageName>Edit A Video</PageName>
      <AddVidDiv>
      
     
      <VidBox></VidBox>

     </AddVidDiv>

    <form onSubmit={handleSubmit(onSubmit)}>

    <Titles>Title</Titles>    
    <input type="text" 
           placeholder="Title" 
           name="Title" 
           className="Input"
           ref={register({required: true, maxLength: 80})} 
           />

  
      
    <Titles>Catergory</Titles> 
      <select name="Catergory" ref={register}>
        <option value="Instruction">Instruction</option>
        <option value=" Tutorials"> Tutorials</option>
        <option value=" Self-Help"> Self-Help</option>
      </select>

      

      <Titles>Description</Titles>
      <input style={{top: "554px", left: "16px", width: "100%", height: "110px"}} type="text" name="Description" ref={register({required: true, maxLength: 1000})} />
      

        <Button>Save Video</Button>
    </form>
    </AddForm>
  );

  
}


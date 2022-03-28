import React from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form";

const Container = styled.div`
    width: 100%;
    height: 86vh;
    display: flex;
    form{
        width: 50%;
        height: 100%;
        background: url(${props => props.bg});
        background-size: cover;
        input{
            display: block;
            width: 60%;
            height: 6vh;
            margin: auto;
            margin-top: 4%;
            border-radius: 5px;
            border: 1px solid #d7286b;
            padding-left: 2%;
            &::placeholder{
                color: #d7286b;
                font-size:.7vw;
            }
            &:focus{
                outline: none;
            }
        }
        button{
            margin-left: 45%;
            margin-top: 5%;
            padding: 2% 5%;
            background: #d7286b;
            border-radius: 5px;
            border: none;
            font-family: 'PT Sans', sans-serif;
            font-size: .8vw;
            color: white;
        }
    }
`
const Left = styled.div`
    width: 50%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
`
const Text = styled.p`
    font-size: 1.2vw;
    text-align: center;
    padding-top: 5%;
    font-family: 'Concert One', cursive;
    color: #d7286b;
`
const SmallText = styled.p`
    font-size: 1vw;
    text-align: center;  
    margin-top: 3%;  
    font-family: 'Concert One', cursive;
    color: #d7286b;
`
function SgnUp(dark) {
 const { register, handleSubmit, formState: { errors } } = useForm({
     defaultValues:{
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
     }
 });
 const onSubmit = data => console.log(errors);
  return (
    <Container>
        <Left><img src="/group_83.png" alt="" /></Left>
        <form action="" onSubmit={handleSubmit(onSubmit)} bg = {dark ? '' : 'https://static.vecteezy.com/system/resources/previews/001/220/907/non_2x/white-wave-background-vector.jpg'} >
            <Text>Welcome!</Text>
            <SmallText>Let's get to know you</SmallText>

            <input {...register('username',{required: 'this is required', minLength:{value:6, message:' min length is 6'}})} type="text" placeholder='Username' />
            <input {...register('email', {required: 'this is required', minLength:{value:6, message:' min length is 6'}})} type="email" placeholder='E-mail' />
            <input {...register('Password',{required: 'this is required', minLength:{value:6, message:' min length is 6'}})} type="password" placeholder='Choose Password' />
            <p>{errors.password?.message}</p>
            <input {...register('confirmPassword', {required: 'this is required', minLength:{value:6, message:' min length is 6'}})} type="password" placeholder='Confirm Password' />
            <button>Sign Up</button>

        </form>
    </Container>
  )
}

export default SgnUp
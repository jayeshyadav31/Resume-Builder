import React from 'react'
import LogoutButton from '../components/LogoutButton.jsx'
import { Box, Button, Flex, HStack, Link ,Image} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import userAtom from '../Atoms/userAtom.js';

function Headers() {
    const navigate = useNavigate();
    const user=useRecoilValue(userAtom)
    return (
        <Box borderRadius={'6px'} padding={'15px'} marginTop={'20px'} width={'full'}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Link onClick={()=>{navigate('/')}} fontSize={'md'}  color={'#8644A2'} padding={'8px'} >
                    Resume Builder
                    {/* <Image width={'20px'} height={'20px'} src='https://res.cloudinary.com/dyylkrsak/image/upload/v1717610388/Resume_builder_zbtjry.png'/> Resume Builder */}
                </Link>
                {user &&
                <HStack marginRight={'20px'} spacing={'15px'}>
                    <Link onClick={()=>{navigate('/templates')}} color={'#000000'} _hover={{ color: '#704264' }}>
                        Resume Templates</Link>
                    <Link color={'#000000'} _hover={{ color: '#704264' }}
                    onClick={()=>{navigate('/userpage')}} >My Account</Link>
                    <Button onClick={()=>{navigate('/templates')}}
                    color={'#FFAF45'} borderColor={'#FFC94A'} borderWidth={'2px'} borderRadius={'6px'} padding={'5px'} overflow={'hidden'} _hover={{ backgroundColor: '#FFAF45', color: 'white' }}>Build My Resume</Button>
                    <LogoutButton />
                </HStack>
}
            </Flex>
        </Box>
    );
}

export default Headers;
